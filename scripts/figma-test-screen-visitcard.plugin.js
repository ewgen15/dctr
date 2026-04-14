/**
 * Скрипт для Figma Plugin API (через MCP figma_execute або власний плагін).
 * Створює сторінку «Test — VisitCard» і фрейм з трьома інстансами компонента VisitCard (node 136:424).
 *
 * Перед запуском: відкрий файл Moblie APP у Figma Desktop, запусти Figma Desktop Bridge
 * (Plugins → Development → Figma Desktop Bridge).
 */
(async () => {
  const VISIT_CARD_NODE_ID = '136:424';

  const comp = await figma.getNodeByIdAsync(VISIT_CARD_NODE_ID);
  if (!comp || comp.type !== 'COMPONENT') {
    return {
      error: 'Компонент VisitCard не знайдено (очікується COMPONENT за id 136:424)',
      found: comp?.type ?? null,
    };
  }

  let page = figma.root.children.find((p) => p.name === 'Test — VisitCard');
  if (!page) {
    page = figma.createPage();
    page.name = 'Test — VisitCard';
  }
  figma.currentPage = page;

  const FRAME_NAME = 'Тестовий екран — лише VisitCard';
  const old = page.findOne((n) => n.name === FRAME_NAME);
  if (old) old.remove();

  const screen = figma.createFrame();
  screen.name = FRAME_NAME;
  screen.layoutMode = 'VERTICAL';
  screen.primaryAxisSizingMode = 'AUTO';
  screen.counterAxisSizingMode = 'FIXED';
  screen.resize(393, 800);
  screen.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }];
  screen.paddingTop = 24;
  screen.paddingBottom = 32;
  screen.paddingLeft = 16;
  screen.paddingRight = 16;
  screen.itemSpacing = 16;
  screen.primaryAxisAlignItems = 'MIN';
  screen.counterAxisAlignItems = 'CENTER';
  page.appendChild(screen);

  for (let i = 0; i < 3; i++) {
    const inst = comp.createInstance();
    screen.appendChild(inst);
  }

  figma.viewport.scrollAndZoomIntoView([screen]);

  return {
    ok: true,
    pageName: page.name,
    frameId: screen.id,
    instances: 3,
  };
})();
