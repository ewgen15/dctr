---
name: figma-work-zone
description: >-
  Ensures a Figma Section or Frame "work zone" on the target page before or
  while building app screens: default or flow-based naming, minimum 50px gap
  between neighbouring screens, internal padding so screens are not flush to the
  zone edges, and expanding the zone if the area is too small. Uses
  user-figma-console figma_execute with safe patterns (PAGE not CANVAS; sync
  preferred, async only when dynamic-page requires getNodeByIdAsync). Use
  whenever creating or laying out screens in Figma in this project; pair with
  figma-screen-from-app.
---

# Figma: робоча зона (work zone)

## When to apply

- **Whenever** you **create, duplicate, or lay out app screens** in Figma (including tasks driven by **figma-screen-from-app**).
- Run **early** in the session: confirm or create the work zone, then place new screen frames **inside** it (or aligned with the rules below).

## Preconditions

- `figma_get_status` with `probe: true` on `user-figma-console` must succeed (Figma Desktop + **Figma Desktop Bridge**).
- Target **page** is active in Figma (`figma.currentPage`) or resolve by id/name from the user.

## Naming

- **Prefer** a name from the **current flow** (user or task title), e.g. `Екрани — [фіча]`, `WIP — Checkout`.
- **Default** if none given: **`Екрани — робоча зона`**.
- Before creating, **search** the current page for an existing `SECTION` or the chosen name — **reuse** and focus viewport if found (avoid duplicates).

## Layout rules

| Rule | Value |
|------|--------|
| **Внутрішній відступ (inset)** робочої зони до **першого/крайнього** екрану всередині | **≥ 50 px** з усіх боків (верх, праворуч, низ, ліворуч), щоб макети **не прилипали** до меж Section/Frame |
| **Мінімальний відступ** між сусідніми екранами (фреймами макетів) | **50 px** |
| Відступ нової робочої зони від правого краю вже наявного контенту на сторінці | **≥ 50 px** (типово `maxX + 50`, або більше якщо так зручніше) |
| Якщо **робоча зона замала** для подальших екранів | **збільшити ширину** (і за потреби висоту): наприклад мінімум **1200×2000** px; якщо поточна ширина менша — додати ширину кроком **≥400** px до комфортного розміру або поки не вміщується очікувана кількість колонок екранів |

**Внутрішні відступи — як застосувати**

- Якщо робоча зона — **auto-layout** (`layoutMode` **HORIZONTAL** або **VERTICAL**): вистав **`paddingTop` / `paddingRight` / `paddingBottom` / `paddingLeft`** по **≥50** (однаково або більше з боку, де треба повітря). Тоді дочірні екрани автоматично відступають від рамки зони.
- Якщо зона **без** auto layout (або padding недоступний): розміщуй екрани так, щоб від **лівого/верхнього краю** контейнера до найближчого кута екрану було **≥50 px**, і між екранами лишався **≥50 px** (у т.ч. від **правого/нижнього** краю зони до останнього екрану — теж **≥50 px**, інакше при розширенні зони макети «приклеяться» до нової межі — тоді **зсунь** наявні фрейми або **збільш** зону з запасом під inset).
- При **reuse** існуючої зони: перевір на око або через координати, що перший екран не має **(x,y) ≈ (0,0)** без відступу; якщо так — додай padding або **пересунь** дочірні фрейми на **+50** (і вирівняй сітку).

## Implementation (`figma_execute`)

**Critical — Desktop Bridge eval quirks:**

1. **`figma.currentPage.type` is `PAGE`**, not `CANVAS`. Do not reject the page with a wrong type check.
2. **Async vs sync:** Prefer **linear synchronous** code with a single **`return { ... }`**. **However:** if the file uses **`documentAccess: dynamic-page`**, **`figma.getNodeById` is not allowed** — you **must** use **`await figma.getNodeByIdAsync`**, which requires **async** code. In that case use **one** top-level pattern such as **`return (async () => { ...; return { ok: true, ... }; })()`** and **always** check the MCP response **`result`** field (not only `success`) so the bridge actually returned your object. Avoid nested fire-and-forget async.
3. Prefer **`figma.createSection()`**; if `createSection` is missing, or **`appendChild` / `insertChild` into a Section fails** (some `documentAccess: dynamic-page` environments), use **`figma.createFrame()`** as the work-zone container with the same name (optional light fill to distinguish from screens).
4. Avoid relying on **`findOne`** if unavailable — use a **`for` loop** over `page.children`.
5. After create or reuse: **`figma.viewport.scrollAndZoomIntoView`** + **`figma.currentPage.selection = [node]`**.

**Positioning new content:** when adding a **new screen frame** next to existing ones, set `x` so that the horizontal gap from the right edge of the previous frame is **at least 50** (same for vertical stacks if applicable). **First** screen in the zone: **`x` and `y` at least 50** from the zone’s top-left **unless** padding on the zone already provides that inset (then children can start at 0 relative to content box).

**Internal padding:** after **`createSection()`** / work-zone **`Frame`**, if using auto layout, set **`paddingLeft` = `paddingRight` = `paddingTop` = `paddingBottom` = 50** (or minimum 50 each) before appending screen frames — avoids “glued” layouts by default.

**Resizing an existing zone:** if the Section/Frame is smaller than the minimums above, call **`node.resize(newW, newH)`** (or adjust only width per task), preserving children positions or warning the user if overlap risk. Prefer growing the zone **outward** so **inner** padding/inset relative to screens stays meaningful (do not only stretch the border past content without checking bottom/right clearance).

## Default sizes (starting point)

- New Section/Frame: **1400 × 2400** px unless the user specifies otherwise; **expand** if the flow needs more horizontal space per the table above. Minimum dimensions assume **inner** screens stay **≥50 px** from edges; if the zone is tight, increase size before crowding.

## Relationship to other skills

- **[figma-screen-from-app](../figma-screen-from-app/SKILL.md)** — apply **figma-work-zone** when starting screen work so all new screens sit in a defined area with **≥50 px** spacing **between** screens and **≥50 px inset** from the work-zone **border**.

## Extended reference

- Lessons from failed runs: wrong `PAGE` check blocked creation; async that is **not** returned/awaited properly yielded **`undefined`** in the bridge; **`resize(..., 10)`** on vertical auto-layout parents **squashed** screen sections — pair with **[figma-screen-from-app](../figma-screen-from-app/SKILL.md)** section C.2. For **section heights**, prefer **hug** (`AUTO` on the vertical axis) over arbitrary fixed pixel totals — see **figma-screen-from-app** C.2. After placing frames, **structural verification**: **[figma-canvas-verify](../figma-canvas-verify/SKILL.md)**.
