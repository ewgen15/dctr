#!/usr/bin/env node
/**
 * Візуальне порівняння: скрін коду (Playwright) + PNG з Figma (зручніше зберегти через MCP у Cursor)
 * → pixel diff (розміри блоків, типографіка, кольори).
 *
 * Рекомендований потік (без Figma token):
 *   1. У Cursor: MCP user-figma-console → figma_capture_screenshot (або figma_take_screenshot) по node-id фрейма.
 *   2. Збережи PNG як docs/visual-compare/latest/design.png (або інший шлях).
 *   3. npm run visual:capture -- --url "http://localhost:6006/iframe.html?id=..." --out docs/visual-compare/latest/code.png --full-page
 *   4. npm run visual:diff -- --a docs/visual-compare/latest/code.png --b docs/visual-compare/latest/design.png --out docs/visual-compare/latest/diff.png
 *   або одразу: npm run visual:all -- --url "..." --design docs/visual-compare/latest/design.png
 *
 * MCP base64 (figma_execute → JSON з result.base64):
 *   npm run visual:decode-mcp -- --in mcp-result.json --out docs/visual-compare/latest/design.png
 *
 * Опційно (CI / без Desktop): figma-api — REST GET /v1/images (потрібен FIGMA_ACCESS_TOKEN).
 *
 * Один раз: npx playwright install chromium
 */

import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import pixelmatch from 'pixelmatch';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const opts = { _: [] };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next != null && !next.startsWith('--')) {
        opts[key] = next;
        i++;
      } else {
        opts[key] = true;
      }
    } else {
      opts._.push(a);
    }
  }
  return opts;
}

function normalizeNodeId(raw) {
  if (!raw) return '';
  const s = String(raw).trim();
  return s.includes(':') ? s : s.replace(/-/g, ':');
}

async function captureUrl(opts) {
  const url = opts.url;
  if (!url) throw new Error('Потрібно --url');
  const out = opts.out || join(__dirname, '../docs/visual-compare/code.png');
  const width = Number(opts.width || 390);
  const height = Number(opts.height || 844);
  const fullPage = opts['full-page'] === true || opts['full-page'] === 'true';
  const waitMs = Number(opts['wait-ms'] || 400);
  const dpr = Number(opts.dpr || 1);

  await mkdir(dirname(out), { recursive: true });

  const browser = await chromium.launch({ headless: true });
  try {
    const viewH = fullPage ? Math.max(1200, height) : height;
    const page = await browser.newPage({
      viewport: { width, height: viewH },
      deviceScaleFactor: dpr,
    });
    await page.goto(url, { waitUntil: 'load', timeout: 60_000 });
    await new Promise((r) => setTimeout(r, waitMs));
    await page.screenshot({
      path: out,
      fullPage,
      type: 'png',
    });
  } finally {
    await browser.close();
  }

  const meta = await sharp(out).metadata();
  return { out, width: meta.width, height: meta.height };
}

async function fetchFigmaPngViaRest(opts) {
  const fileKey = opts.file;
  const nodeRaw = opts.node;
  if (!fileKey || !nodeRaw) throw new Error('figma-api: потрібно --file <fileKey> та --node <id як 146:1916 або 146-1916>');
  const nodeId = normalizeNodeId(nodeRaw);
  const out = opts.out || join(__dirname, '../docs/visual-compare/design.png');
  const scale = Number(opts.scale || 1);

  const token = process.env.FIGMA_ACCESS_TOKEN || process.env.FIGMA_TOKEN;
  if (!token) {
    throw new Error('figma-api: встановіть env FIGMA_ACCESS_TOKEN (або FIGMA_TOKEN)');
  }

  const u = new URL(`https://api.figma.com/v1/images/${fileKey}`);
  u.searchParams.set('ids', nodeId);
  u.searchParams.set('format', 'png');
  u.searchParams.set('scale', String(scale));

  const res = await fetch(u, { headers: { 'X-Figma-Token': token } });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Figma API ${res.status}: ${t.slice(0, 500)}`);
  }
  const json = await res.json();
  const imageUrl = json.images && json.images[nodeId];
  if (!imageUrl) {
    throw new Error(`Немає URL у відповіді images[${nodeId}]: ${JSON.stringify(json).slice(0, 400)}`);
  }

  const imgRes = await fetch(imageUrl);
  if (!imgRes.ok) throw new Error(`Завантаження PNG з Figma: ${imgRes.status}`);
  const buf = Buffer.from(await imgRes.arrayBuffer());
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, buf);
  const meta = await sharp(buf).metadata();
  return { out, width: meta.width, height: meta.height, nodeId };
}

/**
 * Розкодовує PNG з JSON відповіді MCP (figma_execute з exportAsync + base64).
 * Підтримує: { success, result: { base64 } }, { result: { base64 } }, { base64 }.
 */
async function decodeMcpJsonToPng(opts) {
  const inputPath = opts.in || opts.input;
  const out = opts.out;
  if (!inputPath || !out) {
    throw new Error('decode-mcp: потрібно --in <файл.json> --out <файл.png>');
  }
  const raw = await readFile(inputPath, 'utf8');
  let j;
  try {
    j = JSON.parse(raw);
  } catch (e) {
    throw new Error(`decode-mcp: не JSON: ${e.message}`);
  }
  const b64 =
    (j && j.result && typeof j.result.base64 === 'string' && j.result.base64) ||
    (j && typeof j.base64 === 'string' && j.base64) ||
    (j &&
      j.result &&
      j.result.result &&
      typeof j.result.result.base64 === 'string' &&
      j.result.result.base64);
  if (!b64) {
    throw new Error(
      'decode-mcp: у файлі немає base64. Очікую поле result.base64 (відповідь figma_execute з exportAsync).'
    );
  }
  const buf = Buffer.from(b64, 'base64');
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, buf);
  const meta = await sharp(buf).metadata();
  return { out, bytes: buf.length, width: meta.width, height: meta.height };
}

async function alignForDiff(pathA, pathB) {
  const mA = await sharp(pathA).metadata();
  const mB = await sharp(pathB).metadata();
  const w = Math.max(mA.width || 0, mB.width || 0);
  const h = Math.max(mA.height || 0, mB.height || 0);

  async function pad(path) {
    const meta = await sharp(path).metadata();
    const bottom = Math.max(0, h - (meta.height || 0));
    const right = Math.max(0, w - (meta.width || 0));
    const { data, info } = await sharp(path)
      .extend({
        top: 0,
        left: 0,
        bottom,
        right,
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    return { data: new Uint8Array(data), width: info.width, height: info.height };
  }

  const [a, b] = await Promise.all([pad(pathA), pad(pathB)]);
  return { a, b, canvasW: w, canvasH: h };
}

async function runDiff(opts) {
  const pathA = opts.a;
  const pathB = opts.b;
  if (!pathA || !pathB) throw new Error('Потрібно --a path/to/code.png --b path/to/design.png');
  const outDiff = opts.out || join(__dirname, '../docs/visual-compare/diff.png');
  const threshold = Number(opts.threshold ?? 0.12);

  const { a, b, canvasW, canvasH } = await alignForDiff(pathA, pathB);
  const diff = new Uint8Array(canvasW * canvasH * 4);
  const numDiff = pixelmatch(a.data, b.data, diff, canvasW, canvasH, {
    threshold,
  });

  await mkdir(dirname(outDiff), { recursive: true });
  await sharp(Buffer.from(diff), {
    raw: { width: canvasW, height: canvasH, channels: 4 },
  })
    .png()
    .toFile(outDiff);

  const total = canvasW * canvasH;
  const pct = total ? ((numDiff / total) * 100).toFixed(2) : '0';

  const metaA = await sharp(pathA).metadata();
  const metaB = await sharp(pathB).metadata();

  const report = [
    `Канвас для порівняння: ${canvasW}×${canvasH} px (max з обох зображень, вирівняно білим фоном)`,
    `Файл A (код): ${pathA} — ${metaA.width}×${metaA.height}`,
    `Файл B (дизайн): ${pathB} — ${metaB.width}×${metaB.height}`,
    `Відмінних пікселів (приблизно): ${numDiff} з ${total} (${pct}%)`,
    `Поріг pixelmatch threshold=${threshold} (менше = чутливіше до дрібниць і згладжування шрифтів)`,
    '',
    'Примітки:',
    '- Червоні/кольорові плями на diff — зона відмінності (розміри блоків, відступи, колір, шрифт).',
    '- Різниця в рендері шрифтів (ClearType vs Figma) дає «шум» навколо літер — це не завжди помилка верстки.',
    '- Для кегля/інтерліньяжу корисно додатково звірити типографіку в інспекторі та в Tailwind/CSS.',
  ].join('\n');

  const reportPath = outDiff.replace(/\.png$/i, '.txt');
  await writeFile(reportPath, report, 'utf8');

  return { outDiff, reportPath, numDiff, total, pct, canvasW, canvasH, report };
}

const MCP_HINT = `
Figma (простий спосіб — MCP у Cursor, без token):
  • Відкрий файл у Figma Desktop, увімкни Desktop Bridge.
  • У чаті: figma_capture_screenshot або figma_take_screenshot з node-id фрейма.
  • Збережи зображення у шлях, який передаси в --design (наприклад docs/visual-compare/latest/design.png).
`.trim();

async function runAll(opts) {
  const outDir = opts['out-dir'] || join(__dirname, '../docs/visual-compare/latest');
  await mkdir(outDir, { recursive: true });
  const codePath = join(outDir, 'code.png');
  const designPath = opts.design || join(outDir, 'design.png');

  if (!opts.url) throw new Error('all: потрібно --url');

  try {
    await stat(designPath);
  } catch {
    throw new Error(
      `Немає файлу дизайну: ${designPath}\n\n${MCP_HINT}\n\nПотім: npm run visual:all -- --url "<iframe url>" --design "${designPath}"`
    );
  }

  await captureUrl({
    ...opts,
    url: opts.url,
    out: codePath,
  });

  const diffOpts = {
    ...opts,
    a: codePath,
    b: designPath,
    out: join(outDir, 'diff.png'),
  };
  const result = await runDiff(diffOpts);
  await writeFile(
    join(outDir, 'README.txt'),
    [
      'Згенеровано scripts/visual-compare.mjs all',
      '',
      'Файли:',
      '  code.png   — скрін з браузера (Storybook iframe)',
      '  design.png — ти зберіг через MCP (figma_capture_screenshot) у цей шлях перед запуском',
      '  diff.png   — підсвітка відмінностей',
      '  diff.txt   — короткий звіт',
      '',
      result.report,
    ].join('\n'),
    'utf8'
  );

  return { outDir, designPath, ...result };
}

function printHelp() {
  console.log(`
visual-compare.mjs — скрін коду + PNG з Figma (зазвичай через MCP) → diff

Рекомендовано (Figma без REST token):
  1) У Cursor: MCP → figma_capture_screenshot (node-id фрейма) → зберегти як design.png
  2) npm run visual:all -- --url "http://localhost:6006/iframe.html?id=..." --design path/to/design.png

Команди:
  capture   Скріншот сторінки (Playwright Chromium)
            --url <url>              обов'язково (напр. Storybook iframe)
            --out <path>             default docs/visual-compare/code.png
            --width <px>             viewport ширина (default 390)
            --height <px>            якщо не full-page (default 844)
            --full-page              повна висота сторінки
            --dpr <n>                devicePixelRatio (default 1)
            --wait-ms <n>            пауза після load (default 400)

  diff      Порівняти два PNG
            --a <code.png> --b <design.png>
            --out <diff.png>
            --threshold <0..1>       pixelmatch (default 0.12)

  all       capture + diff (design.png уже має існувати — з MCP)
            --url <iframe url>       обов'язково
            --design <path>          default <out-dir>/design.png
            --out-dir <dir>          default docs/visual-compare/latest

  figma-api Опційно: PNG через Figma REST (для CI), потрібен FIGMA_ACCESS_TOKEN
            --file <fileKey> --node <146:1916> --out <path> [--scale 1]

  decode-mcp  PNG з JSON (відповідь MCP figma_execute з result.base64)
            --in <mcp-output.json>   обов'язково
            --out <design.png>       обов'язково

Змінні середовища (лише figma-api):
  FIGMA_ACCESS_TOKEN або FIGMA_TOKEN
`);
}

async function main() {
  const opts = parseArgs(process.argv);
  const cmd = opts._[0];

  if (!cmd || cmd === 'help' || opts.help) {
    printHelp();
    process.exit(cmd ? 0 : 1);
  }

  try {
    if (cmd === 'capture') {
      const r = await captureUrl(opts);
      console.log(JSON.stringify(r, null, 2));
    } else if (cmd === 'figma-api' || cmd === 'figma') {
      if (cmd === 'figma') {
        console.warn(
          'Підказка: для Figma без token зручніше MCP (figma_capture_screenshot) → збережи PNG і використай all з --design. Команда "figma" = "figma-api" (REST).'
        );
      }
      const r = await fetchFigmaPngViaRest(opts);
      console.log(JSON.stringify(r, null, 2));
    } else if (cmd === 'diff') {
      const r = await runDiff(opts);
      console.log(r.report);
      console.log('\n→', r.outDiff, '\n→', r.reportPath);
    } else if (cmd === 'all') {
      const r = await runAll(opts);
      console.log(r.report);
      console.log('\nКаталог:', r.outDir);
      console.log('design (MCP):', r.designPath);
      console.log('→', r.outDiff);
    } else if (cmd === 'decode-mcp') {
      const r = await decodeMcpJsonToPng(opts);
      console.log(JSON.stringify(r, null, 2));
    } else {
      console.error('Невідома команда:', cmd);
      printHelp();
      process.exit(1);
    }
  } catch (e) {
    console.error(e.message || e);
    process.exit(1);
  }
}

main();
