---
name: figma-screen-from-app
description: >-
  Builds or updates a Figma screen from an existing in-app screen implemented in
  code (routes, components, Storybook). Requires a chosen Figma file, one screen
  per run, inventory of UI blocks vs React/Storybook/Figma, MCP Desktop Bridge,
  a closing report, and after Figma work a count of non-component layers with
  reasons appended to docs/ui-components-backlog.md. Use when the user wants a
  Figma mockup that matches an app screen, syncs design with code, or documents
  components against Figma. Includes auto-layout rules: vertical hug for section
  heights, horizontal FILL/STRETCH for full-width rows (header, list rows, CTAs),
  padding-aware inner width, and intentional HUG for chips. For a dedicated work
  area (Section) and 50px spacing, use figma-work-zone when laying out screens.
  Companion skills: figma-canvas-verify (structural check), figma-bind-tokens
  (variables pass), figma-component-from-code (new COMPONENT from code — not a
  full screen).
---

# Figma screen from app screen

## When to apply

- User asks to **create or recreate a screen in Figma** from what exists in **React / routes / Storybook**.
- Task is **one screen at a time**; repeat the workflow for additional screens.
- When placing work in Figma, follow **[figma-work-zone](../figma-work-zone/SKILL.md)** (робоча зона, відступи **≥50 px** між екранами).

## Preconditions

1. **Figma file:** Resolve a single design file URL or `fileKey` (see `README.md`, `docs/`, Storybook `parameters.design`, or `@see` links). If several files exist (e.g. DoctorNow README vs Moblie-APP for VisitCard), **ask the user to pick** the canonical file (and page/frame if needed) before editing.
2. **Screen scope:** The user prompt must name **exactly one** screen (route, story name, file path, or short UI description).
3. **MCP:** `figma_get_status` with `probe: true` on server `user-figma-console` — must succeed before `figma_execute` or heavy edits. If not connected: Figma Desktop + Plugins → Development → **Figma Desktop Bridge** → Run.

## Workflow

### A. Map the app screen to blocks

- Open the relevant **route/component files** and **stories** in the repo.
- List **logical UI blocks** (header, cards, lists, nav, etc.).
- For each block, note: existing **React component**?, **Story**?, **Figma link** in story or code?

### B. Map Figma

- Use `figma_get_file_for_plugin` or `figma_get_file_data` with `fileUrl` and limited `depth` / `verbosity` — avoid full-file dumps.
- Parse Figma URLs: `node-id=117-253` → node id **`117:253`** in API calls.
- Refresh **node ids** in-session; do not trust ids from old chats without verification.
- Use `figma_search_components` as a helper; if empty, locate components via file tree + codebase references.

### C. Implement in Figma

- **Work zone:** apply **[figma-work-zone](../figma-work-zone/SKILL.md)** — ensure a Section (or Frame) exists with flow-based or default name; expand if too small; **≥50 px** gap between neighbouring screen frames.
- Prefer **component instances** over detached frames when a matching **COMPONENT** exists in the same file.
- Prefer **`figma_instantiate_component`** (with `componentKey` + `nodeId` from `figma_search_components`) when it covers the case — fewer lines inside `figma_execute`, easier to recover from failures.
- Use `figma_execute` for plugin API operations (clone frames, `createInstance`, `insertChild`, positioning). Read MCP tool schemas before calling; see **figma-work-zone** for safe `figma_execute` patterns (`PAGE`, async vs return). **Never trust `success: true` alone** — read the MCP **`result`** payload (or verify the frame tree) so a partial run after an exception is not mistaken for a finished screen.
- Place new work in a clear area (offset clones) to avoid overlapping existing frames; follow any **Figma Console MCP** placement rules in server instructions.

#### C.1 Plugin API: `dynamic-page` and node lookup

- Some files use **`documentAccess: dynamic-page`**. In that mode **do not** call **`figma.getNodeById`** — it throws (use **`await figma.getNodeByIdAsync(id)`** inside async code). This especially affects **resolving COMPONENT nodes** before `createInstance()`.
- **Default for this repo’s Moblie APP file:** treat node lookup as **async-safe** unless you have confirmed synchronous access in-session.

#### C.2 Auto-layout: hug vs fixed (prefer hug for section heights)

- **Prefer hug** for **section wrappers** (headers, filter strips, list stacks, cards): in Plugin API terms, use **`AUTO`** on the axis that controls **height** — on **`VERTICAL`** frames that is **`primaryAxisSizingMode`**; on **`HORIZONTAL`** frames **height** follows **`counterAxisSizingMode`**. This keeps blocks growing with real content instead of arbitrary pixel totals.
- **Reserve fixed heights** for **intrinsic** sizes: status bar (**~44px**), **minimum touch targets** on chips/CTAs (**~44px** height on the chip frame), and **component INSTANCE**s that ship with fixed dimensions.
- **After switching parents to hug, validate children:** if **`HORIZONTAL`** rows use **`counterAxisSizingMode: AUTO`**, nested chip frames can collapse to **text-only** height — restore intent with **padding** on the strip and/or **`FIXED`** height (**44**) on inner chip **frames**, while the **outer** filter row still **hugs** vertically.
- **Screen root:** Prefer **`VERTICAL`** + primary **`AUTO`** so total height = stacked sections (aligned with scrollable content). Avoid a blanket **900px** (or similar) **unless** the goal is explicitly a **single viewport** mock.
- **Anti-pattern (still applies):** **`resize(width, tinyHeight)`** (e.g. `10`) on parents that should hug — **collapses** layout. Same class of bug as before; hug does not remove the need to avoid nonsense dimensions.

- **Bottom safe-area padding (`pb-*` / `padding-bottom`) — code vs Figma:** In React, **`BottomNav`** is often **`position: fixed`** at the bottom; wrappers use **`pb-24`** (e.g. **96px**) so **scrolling content** clears the nav. In Figma, when the screen is a **vertical stack of siblings** (main content **above**, **BottomNav INSTANCE below** — not overlapping), **do not** copy that **`pb-24`** onto the list/main frame: it becomes **duplicate empty space** below the last card. **Rule:** *stacked mockup → no bottom “nav clearance” padding on content frames;* only add bottom padding if you are **deliberately** simulating a **scroll region** with a **fixed** nav overlay in the same frame.

#### C.2.1 Horizontal width: FILL vs HUG (full-width rows)

Use this together with **C.2** (vertical hug for section heights). **Height** may hug; **width** of rows that should match the **content column** must **not** stay **`HUG`** unless the element is intentionally narrow (chip, badge, icon-only).

- **Default rule:** If a block is meant to span the **full width of its parent** (top **Header** strip, **list row**, **card row**, **CTA row**, **document row**), set **`layoutSizingHorizontal`** to **`FILL`** and **`layoutAlign`** to **`STRETCH`** on that child when the parent is **`VERTICAL`** auto-layout. Leaving **`HUG`** on those frames shrinks them to content and produces a **ragged right edge** and “floating” strips (e.g. header bar only ~200px wide on a 390px screen).
- **Screen header (back + title):** The header **FRAME** must span the **full screen width** (e.g. **390px**), not hug to the combined text width.
- **Padding vs inner width:** A parent may be **350px** wide with **horizontal padding 16+16**. Inner rows that **fill** the padded area will read as **~318px** wide — that is **expected** (fill inside padding), not a mistake to “fix” by forcing 350px on the inner row.
- **Plugin API constraint:** **`FILL`** on the horizontal axis is only valid for **children of auto-layout** parents. If **`set_layoutSizingHorizontal`** errors, ensure the parent has **`layoutMode`** set (or adjust with **`resize`** to the target width + **`STRETCH`** in the vertical parent).
- **Multi-column rows** (e.g. medicine title + price): the **primary text column** should use **`FILL`** (and often **`layoutGrow: 1`**) so titles use available width; **price** / **meta** can stay **`HUG`** or **`FIXED`**.
- **TEXT nodes** are often **`HUG`** horizontally by nature; the **wrapper FRAME** for a full-width paragraph or row should still **`FILL`/`STRETCH`**, not the other way around.
- **Keep `HUG` on purpose:** Small **chips**, **MKH** lines, **badges**, **icon-only** frames — only as wide as content; do not stretch these to full width.

After structural edits, **verify** with **`figma_take_screenshot`** or a small **`figma_execute`** pass that lists **`layoutSizingHorizontal`** / **`width`** vs parent width for **FRAME**/**INSTANCE** rows under the screen root.

#### C.3 Reliability and timeouts

- **`await figma.loadFontAsync`** before creating **TEXT** nodes if fonts may be missing.
- Large single **`figma_execute`** blocks risk **timeout**; split into **work zone → shell frame → instantiate components → primitives**, or raise **`timeout`** in the tool if supported.
- After building, **validate** (combine visual + structural):
  - **`figma_take_screenshot`** on the target frame when the API allows (check alignment/spacing).
  - If screenshot fails (**e.g. rate limit 429**) or as a default complement, run **`figma_execute`** that returns **structured data** (child **names**, **heights**, **instance** ids) and compare to an **expected checklist** — see **[figma-canvas-verify](../figma-canvas-verify/SKILL.md)**.
  - Do **not** treat “no screenshot” as “no verification.”

#### C.4 Two-pass execution (structure vs design tokens)

- Inspired by robust Figma automation pipelines: **do not mix** in one fragile mega-script (1) **building geometry** (frames, instances, text, auto layout) and (2) **binding Figma Variables** / semantic styles to every fill.
- **Pass A — screen structure:** blocks, instances, hug/fixed rules, **`pb-*` / stacked nav** rules — goal: correct **layout**.
- **Pass B — tokens (optional, separate intent):** bind paints/numbers to **Variables**, apply **text styles** — goal: **design system linkage**. Use **[figma-bind-tokens](../figma-bind-tokens/SKILL.md)** when the user wants that pass; skip Pass B for “layout-only” mocks.
- If Pass B is skipped, say so in the closing report.

#### C.5 `figma_execute`: node construction order

- **`appendChild` / tree placement** before relying on **`resize`** or detailed auto-layout props (reduces silent layout bugs).
- Set **`layoutMode`** (when using auto layout) **before** other auto-layout fields (padding, alignment, sizing modes).
- **Fills/strokes:** use **RGB 0–1** in Plugin API when setting raw colors (consistent with common Scripter-style rules).
- **TEXT overrides** on **INSTANCE**s: prefer **`figma_set_instance_properties`** when the component exposes **TEXT** properties — direct edits on nested layers **may** fail for some instances; see **C.6** for library **Button**s where only VARIANT props appear.

#### C.6 Labels on `Button` INSTANCEs (published libraries, e.g. Untitled UI)

- After **`importComponentByKeyAsync`** or **`figma_instantiate_component`**, the label is often still the kit default (e.g. **«Button CTA»**) — **always** set the real copy before considering the block done.
- **Step 1 — exposed text props:** Read **`instance.componentProperties`**. If any property is **TEXT** (names may include a **`#nodeId`** suffix), set it via **`figma_set_instance_properties`** or **`instance.setProperties({ [name]: '…' })`**.
- **Step 2 — VARIANT-only kits:** Many **Untitled UI** buttons expose only **VARIANT** props (**Size**, **Hierarchy**, **Icon**, …). Then the visible string lives on a **nested `TEXT` node** (commonly named **`Text`**). Traverse descendants, **`await figma.loadFontAsync(textNode.fontName)`**, then **`textNode.characters = '…'`** (Ukrainian / UI strings as in code or story).
- **Step 3 — verify:** Re-read **`textNode.characters`** (or the TEXT property value) so placeholders cannot remain silently.

#### Related skills (when to branch)

| Skill | Use when |
|-------|----------|
| **[figma-canvas-verify](../figma-canvas-verify/SKILL.md)** | After edits — checklist + structured `result` from the canvas. |
| **[figma-bind-tokens](../figma-bind-tokens/SKILL.md)** | User wants Variables / token binding after the frame exists. |
| **[figma-component-from-code](../figma-component-from-code/SKILL.md)** | User wants a **new COMPONENT** from React (not a whole screen frame). |

### D. Closing report (required)

Produce a short report with counts and lists:

| Section | Content |
|--------|---------|
| Total UI blocks / elements counted | number |
| Built using Figma components (instances) | list |
| In Storybook **and** Figma documented | list |
| In Storybook but missing or undocumented in Figma | list |
| In Figma but no matching component/story in code | list |

Add notes for placeholders (e.g. temporary rectangles).

### E. Non-component elements + backlog (required after Figma analysis)

After the screen exists or was updated in Figma, **analyze** the relevant frame tree (via MCP or documented structure):

1. **Count** significant layers that are **not** `INSTANCE` of a library/main file component (e.g. bare `FRAME`, `GROUP`, primitives, or detached copies). Focus on **meaningful UI blocks**, not every leaf node.
2. Report to the user: **how many** such elements were found (and optionally grouped, e.g. “3× icon row”, “1× header block”).
3. For each item (or each group with one reason), **append rows** to **[docs/ui-components-backlog.md](../../docs/ui-components-backlog.md)** in **section 2 (Кандидати на компоненти)** with:
   - date, screen name, element/layer identifier;
   - status columns as known (Code / Storybook / Figma);
   - **«Чому в беклозі»** — one sentence: e.g. *not an INSTANCE — detached frame*, *no COMPONENT in file yet*, *temporary placeholder*, *one-off until design tokens land*.
4. If nothing qualifies, add a one-line note under the screen journal (section 1) or state in the reply: *non-components: 0; backlog unchanged*.

Cross-reference skill: **components-storybook-figma-tracking** for backlog habits and reading the file at task start.

## Scope boundaries

- This skill covers **end-to-end alignment** for one **screen frame**: file choice, inventory, MCP steps, report.
- **Not in scope here:** full **variable binding** for every layer (use **figma-bind-tokens**); **authoring a new COMPONENT** from scratch (use **figma-component-from-code**); **detached frame → instance swap** — `figma-mcp-duplicate-frame-component` in this repo when relevant.

## Extended reference

- **[figma-work-zone](../figma-work-zone/SKILL.md)** — робоча зона, назва, відступи 50 px, розширення області.
- **[figma-canvas-verify](../figma-canvas-verify/SKILL.md)** — структурна перевірка після змін.
- **[figma-bind-tokens](../figma-bind-tokens/SKILL.md)** — другий прохід: Variables / токени.
- **[figma-component-from-code](../figma-component-from-code/SKILL.md)** — компонент з коду, не цілий екран.
- [docs/figma-screen-from-app-skill-spec.md](../../docs/figma-screen-from-app-skill-spec.md) — tables, file keys, MCP notes.
- [docs/ui-components-backlog.md](../../docs/ui-components-backlog.md) — screen journal and component candidates (updated in section E).
- Optional after the task: **[skill-retrospective](../skill-retrospective/SKILL.md)** — one question on wishes for this skill; append to [docs/skill-improvements-backlog.md](../../docs/skill-improvements-backlog.md) if needed.
