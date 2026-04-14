---
name: components-storybook-figma-tracking
description: >-
  Maintains a running backlog of screens touched in development and UI elements
  that may need to become shared components in React, Storybook, and Figma.
  Reads and updates docs/ui-components-backlog.md. Use when working on screens,
  design-code sync, component extraction, or after Figma screen work that
  surfaces non-instance layers. Pairs with figma-screen-from-app.
---

# Components: Storybook ↔ Figma backlog

## Canonical file

- **[docs/ui-components-backlog.md](../../docs/ui-components-backlog.md)** — single source for notes (screens journal + component candidates).

## When to apply

- Starting or finishing work on **screens**, **new UI blocks**, or **design–code alignment**.
- After **figma-screen-from-app** completes (especially when non-component elements were counted).
- User asks to **track** what still needs components, stories, or Figma components.

## On start (tasks involving components/screens)

- **Read** `docs/ui-components-backlog.md` for context on recent screens and open candidates.

## What to record

### Section 1 — Screen journal

- Add or update a row when a **screen** is materially worked on: date, screen name/route, short note (PR/issue optional).

### Section 2 — Component candidates

For each item that is **not yet** a proper shared component in code and/or design, add a row:

| Field | Purpose |
|-------|---------|
| Screen / place | Where it appears |
| Element | Layer name or UI block |
| Code / Storybook / Figma | Y/N or short status |
| **Why in backlog** | One sentence: e.g. detached frame in Figma, no COMPONENT in file, placeholder, pending design system |

### Section 3 — Resolved (optional)

- Move or summarize **closed** items with date and link/commit.

## Relationship to figma-screen-from-app

- That skill **must** append backlog rows for **non-component Figma elements** (see its section E) with the **reason** column filled.
- This skill ensures the **file stays the habit** and is read before related work.

## Limits

- This is an **operational log**, not a full design-system audit. Keep rows concise; avoid duplicating full specs.

## Optional

- After significant updates, **[skill-retrospective](../skill-retrospective/SKILL.md)** can capture user wishes for this or other skills → [docs/skill-improvements-backlog.md](../../docs/skill-improvements-backlog.md).
