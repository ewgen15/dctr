---
name: figma-canvas-verify
description: >-
  After figma_execute or layout edits, verifies a Figma frame via structured
  data (child names, sizes, instance ids) against an expected checklist. Use
  when screenshots are unavailable (e.g. API rate limit) or as a complement
  to figma_take_screenshot. Pairs with figma-screen-from-app.
---

# Figma: canvas verify (structural)

## When to apply

- After **building or editing** a screen or section in Figma via **`figma_execute`**.
- **`figma_take_screenshot`** failed (**429**, timeout) or you want **non-visual** confirmation.
- User asks to **verify** layout / presence of blocks without opening Figma manually.

## Preconditions

- **`figma_get_status`** with **`probe: true`** on **`user-figma-console`** succeeds.
- Target **frame node id** is known (from `result`, selection, or user URL).

## Workflow

1. **Define an expected checklist** for the screen (e.g. `StatusBar`, `Header`, `Filters`, `Doctor list`, `BottomNav` — names as in the layers).
2. Run **`figma_execute`** (async-safe if **`dynamic-page`**) that:
   - Loads the root node with **`getNodeByIdAsync`**.
   - Walks **direct children** (or one level deeper if needed).
   - **`return`s** a JSON-serializable object: `{ frameName, frameId, height, children: [{ name, type, height, width }] }` (and **`mainComponent`** id for **INSTANCE** if useful).
3. Compare **names** and **count** to the checklist; flag **missing** or **extra** layers.
4. Optional: compare **heights** only for fixed blocks (e.g. status bar ~44) — hug blocks may vary.

## Boundaries

- Does **not** replace **visual** review when screenshots work — use **both** when possible.
- Does **not** validate design **quality** (alignment, typography) — only **structure** and basic dimensions.

## Related

- **[figma-screen-from-app](../figma-screen-from-app/SKILL.md)** — main screen workflow; call verify in section **C.3**.
