---
name: figma-bind-tokens
description: >-
  Second pass on an existing Figma frame or component: bind fills, strokes, and
  numeric layout values to Figma Variables and apply text styles. Use when the
  user wants design-system linkage after geometry exists — not mixed with initial
  screen construction. Pairs with figma-screen-from-app Pass A / Pass B.
---

# Figma: bind design tokens (Variables)

## When to apply

- **After** a frame or **COMPONENT** already exists (**Pass A** layout is done).
- User explicitly wants **Figma Variables**, **semantic colours**, or **text styles** applied.
- **Do not** use as the first step when the user only asked for a **layout mock** from code.

## Preconditions

- **`figma_get_status`** + **`probe: true`** on **`user-figma-console`**.
- Variables / collections exist in the file or user agrees to create them (may use MCP batch tools per Figma Console instructions).

## Workflow

1. **Inventory** which layers need binding (fills, strokes, corner radius, spacing).
2. Prefer **batch** variable tools if available in MCP (`figma_batch_create_variables`, `figma_batch_update_variables`, **`figma_setup_design_tokens`**) — see server docs.
3. Bind via Plugin API patterns: **`setBoundVariableForPaint`**, **`setBoundVariable`** for numbers — execute in **`figma_execute`** with **`getNodeByIdAsync`**.
4. **Verify**: re-read bound nodes or run **[figma-canvas-verify](../figma-canvas-verify/SKILL.md)** + optional screenshot.

## Boundaries

- **Not** a replacement for **[figma-screen-from-app](../figma-screen-from-app/SKILL.md)** — that skill owns **screen composition**; this skill owns **token linkage**.
- Published **library** workflows may need **`libraryFileKey`** — use **`figma_search_components`** / REST as per MCP.

## Related

- **[figma-screen-from-app](../figma-screen-from-app/SKILL.md)** — **C.4** two-pass execution.
