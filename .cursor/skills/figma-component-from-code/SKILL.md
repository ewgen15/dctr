---
name: figma-component-from-code
description: >-
  Creates or updates a single Figma COMPONENT from React source (props, JSX
  structure), Storybook, and optional design links — not a full app screen.
  Scope is narrower than figma-screen-from-app (which builds whole screen frames).
  Use for DoctorCard-style extractions, nav bars, repeatable cards.
---

# Figma component from code (narrow scope)

## When to apply

- User wants a **reusable Figma COMPONENT** (or **COMPONENT_SET**) matching a **React component**.
- **One component per run** (variants optional, second pass).
- **Not** the same as **“build the whole `/doctors` page”** — that is **[figma-screen-from-app](../figma-screen-from-app/SKILL.md)**.

## Preconditions

- **Figma file** chosen (same as project conventions).
- **`figma_get_status`** + **`probe: true`**.
- Read **`component` source**, **`.stories.tsx`**, **`parameters.design`** / **`@see`** in code.

## Workflow (high level)

1. **Map props** to Figma **variants** or **component properties** (document decisions).
2. **Pass A — geometry:** create **COMPONENT** (or set), structure, auto layout, instances of smaller atoms if they exist.
3. **Pass B — tokens (optional):** **[figma-bind-tokens](../figma-bind-tokens/SKILL.md)**.
4. **Storybook:** add or update **`parameters.design`** URL to the new **COMPONENT** node.
5. **Report:** link to **`docs/ui-components-backlog.md`** if candidates remain.

## Boundaries

- **Published libraries** and **Propstar**-style variant grids — follow Figma Console MCP + file conventions; keep scripts **split** (structure vs bindings) per **figma-screen-from-app C.4**.
- Detached frame **→** instance swap: **[figma-mcp-duplicate-frame-component](../figma-mcp-duplicate-frame-component/SKILL.md)** when relevant.

## Related

- **[figma-screen-from-app](../figma-screen-from-app/SKILL.md)** — full **screen** frames.
- **[figma-canvas-verify](../figma-canvas-verify/SKILL.md)** — verify structure after creation.
