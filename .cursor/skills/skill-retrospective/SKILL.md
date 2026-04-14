---
name: skill-retrospective
description: >-
  After a task that followed another Cursor skill, reflects on whether the skill
  matched the work, optionally asks one short question about wishes for that
  skill, and appends rows to docs/skill-improvements-backlog.md when needed.
  Also runs on demand when the user asks what to improve in a skill or wants a
  skill review. Stops asking follow-ups if the user has no skill-related wishes.
---

# Skill retrospective (meta)

## Canonical file

- **[docs/skill-improvements-backlog.md](../../docs/skill-improvements-backlog.md)** — backlog rows for SKILL improvements.

## When to apply

**A. Post-task (optional but recommended after meaningful work)**  
Another skill (e.g. `figma-screen-from-app`, `components-storybook-figma-tracking`) was the main guide; the task is **done or paused**.

**B. On-demand**  
The user asks, in any wording: improve this skill, review a skill, what is missing in skill X, retrospective for skill Y.

## Preconditions

- Know **which skill** (`name` from YAML) was in scope, or ask once.
- Have enough context: **what was done**, **user comments** in the thread if any (code review notes, dissatisfaction, “almost worked”).

## Workflow

### 1. Quick alignment check (silent or brief)

- Compare **stated steps** in that skill’s `SKILL.md` with **what was actually needed** for this task.
- Note **gaps** (missing step, wrong trigger, too verbose section), **surplus** (irrelevant steps), **ambiguity**.

### 2. Comments analysis

- Scan **user messages and review-style comments** for anything that targets **process / instructions / skill**, not only product bugs.
- If nothing refers to how the agent followed the skill, **do not invent** problems.

### 3. One optional question (only if useful)

Ask **at most one** short question, e.g.:

- *«Чи є зараз побажання саме до skill **&lt;name&gt;** (що дописати, скоротити або змінити)? Якщо ні — просто напиши “ні”, і змін до беклогу не додам.»*

If the user answers **no** / **ні** / **all good** / **залишаємо як є** — **stop**: do not ask again in the same thread for this task unless they bring it up.

If they answer **yes** — capture the wish; optionally propose a concrete one-line edit to the skill.

### 4. Backlog append (only when warranted)

Add a row to `docs/skill-improvements-backlog.md` when **any** of:

- User expressed a **wish** or **concrete improvement** for the skill.
- Retrospective found a **clear gap** (skill promised X but workflow needed Y) **and** user did not object to logging it.
- On-demand review: list actionable items; user may confirm which rows to add.

**Do not** append empty noise (“everything fine”) — a verbal OK is enough.

### 5. On-demand: “what to improve in skill X”

1. Read `.cursor/skills/<skill-name>/SKILL.md` and any linked reference.
2. Read recent rows in `docs/skill-improvements-backlog.md` for that skill.
3. Reply with **short prioritized list** of improvements (clarity, triggers, scope, token-heavy sections → `reference.md`).
4. Ask whether to **add backlog rows** or **apply edits** to the skill file (only if user wants changes in-repo).

## Boundaries

- This meta-skill **does not** replace code review or product QA.
- **One** follow-up question maximum per retrospective round; respect “no”.
- Keep backlog rows **concise**; link to PR/commit in “Закриті” when a skill is actually updated.

## Related

- Project skills under `.cursor/skills/` — subjects of retrospective.
- Cursor **create-skill** guidance: keep `SKILL.md` concise (~500 lines), move long reference to separate files; strong `description` (what + when).
