# Experiment: dedicated Figma space for Storybook components

**Language:** English · [Українська](./storybook-figma-components-experiment.md)

## Why

Keep **existing** UI components that already exist in **Storybook** in a **separate space** (a dedicated **page** or **Section** in Figma) so you can:

1. **Polish** them in design (spacing, typography, states) without tying them to a full screen.
2. **Connect** them later: shared tokens/variables, **library components**, instances on screens, and in code (`parameters.design` in stories).

This is **not** a replacement for [figma-screen-from-app](../.cursor/skills/figma-screen-from-app/SKILL.md) (that flow is for **full screens**). Here the focus is **atoms/molecules** from the Storybook sidebar: `Components/*`, `UI/*`.

---

## Where in Figma

- A **dedicated page** (recommended for clarity), e.g. **«Компоненти — Storybook (WIP)»**, or
- A **Section** on an existing page with a clear name, e.g. **`Компоненти — код ↔ дизайн`**.

Layout rules: [figma-work-zone](../.cursor/skills/figma-work-zone/SKILL.md) — at least **50 px** between neighbouring frames and **≥ 50 px** inset from the zone edge.

Mobile preview width: **383 px** (same as Storybook decorators), unless you build desktop separately.

---

## Storybook inventory → Figma queue

| Storybook (sidebar) | File | Notes |
|---------------------|------|-------|
| `Components/BottomNav` | `BottomNav.stories.tsx` | Already has `parameters.design` |
| `Components/StatusBar` | `StatusBar.stories.tsx` | node-id added after layout |
| `Components/ScreenHeader` | `ScreenHeader.stories.tsx` | Variants: center / back / sticky |
| `Components/VisitCard` | `VisitCard.stories.tsx` | Figma URL already in story |
| `Components/DoctorCard` | `DoctorCard.stories.tsx` | Shared base with VisitCard |
| `Components/ActionButton` | `ActionButton.stories.tsx` | |
| `UI/Button` | `ui/button.stories.tsx` | Primitive from Untitled UI |

**`Pages/*`** screens are a separate track ([TASK-PLAN](./TASK-PLAN.md), Storybook table); you can omit them from this experiment or link only.

---

## Workflow

1. **Storybook** (`npm run storybook`) — walk through the stories in the table and note which variants/states must match Figma 1:1.
2. In Figma — for each block: a **Frame** named like Storybook (e.g. `StatusBar / Default`), then recreate or import from an existing library.
3. Mark stable layers as **COMPONENT** in Figma; then use instances on screens.
4. In code — add or update **`parameters.design.url`** in the matching `*.stories.tsx` (node-id from the Figma URL).
5. Log gaps if needed in [ui-components-backlog.md](./ui-components-backlog.md).

---

## Design ↔ code

- Agree on a **single source of truth** (code or Figma) first, then align the other.
- Once a stable COMPONENT exists in the file, the Storybook **Design** addon can show the frame next to the implementation.

---

## Experiment status

- **Figma file:** [Moblie APP](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP) (`eUrxfq0FkLzMZFkCLf58r0`)
- **Page:** `Компоненти — Storybook (WIP)`
- **Work zone (Section):** `Компоненти — код ↔ дизайн` — open in file: [node `147:2111`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2111)
- **Started:** 2026-04-12

Inside the Section there are **7 frames** for the inventory. **Instances** from the current file: **StatusBar** (COMPONENT `147:2069`), **VisitCard** (`136:424`) in two frames (standalone and as DoctorCard base), **BottomNav** (`145:1177`). **ScreenHeader**, **ActionButton**, and **UI/Button** frames hold text notes (no local COMPONENT; Button references Untitled UI).

| Storybook | Figma (frame / node for Design tab) |
|-----------|--------------------------------------|
| `Components/StatusBar` | COMPONENT [`147:2069`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2069) |
| `Components/ScreenHeader` | note frame [`147:2113`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2113) |
| `Components/VisitCard` | instance in [`147:2114`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2114) |
| `Components/DoctorCard` | same VisitCard in [`147:2115`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2115) |
| `Components/ActionButton` | note frame [`147:2116`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2116) |
| `Components/BottomNav` | instance in [`147:2117`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2117) |
| `UI/Button` | note frame [`147:2118`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2118) |

---

## Checklist

- [x] Create page and Section in Figma (Desktop Bridge), placeholders per component.
- [x] Fill frames with instances / notes; resize frames to content.
- [ ] Turn stable layers into **COMPONENT** in the file (still missing: ScreenHeader, ActionButton).
- [x] Add **`parameters.design.url`** in the relevant `*.stories.tsx` (StatusBar, ScreenHeader, DoctorCard, ActionButton; VisitCard / BottomNav / UI Button unchanged or Untitled).
- [ ] Log discrepancies in [ui-components-backlog.md](./ui-components-backlog.md) if needed.
