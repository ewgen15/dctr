# Покращення Cursor skills (мета-беклог)

Журнал **ідей і змін для `SKILL.md`** після задач або за явним запитом. Не плутати з [ui-components-backlog.md](ui-components-backlog.md).

**Мета-skill:** `.cursor/skills/skill-retrospective/`.

---

## Шаблон запису

Додавайте рядки зверху (новіші вище).

| Дата | Skill (`name`) | Задача (коротко) | Розрив / побажання | Запропонована зміна | Пріоритет |
|------|----------------|------------------|--------------------|--------------------|-----------|
| 2026-04-12 | `figma-screen-from-app` | Екран Home у Figma з актуального коду | Не описано `documentAccess: dynamic-page` → синхронний `getNodeById` падає після частини кроків; довіра лише до `success` у MCP; `resize(w,10)` на VERTICAL-батьках ламав hug | Дописано підрозділи C.1–C.3 (`getNodeByIdAsync`, перевірка `result`, auto-layout, шрифти/timeout/чеклист); пріоритет `figma_instantiate_component` | високий — **закрито в репо** |
| 2026-04-12 | `figma-work-zone` | Те саме (спільний `figma_execute`) | Суперечність «не async IIFE» vs обов’язковий async для lookup у dynamic-page | П.2 переписано: sync за замовчуванням, async з `return (async ()=>...)()` + перевірка `result`; оновлено description YAML | середній — **закрито в репо** |
| — | — | — | — | — | низький / середній / високий |

**Розрив / побажання:** що skill не покрив, було неясно, зайве, або що користувач хоче змінити.

**Запропонована зміна:** одне речення — що саме дописати, скоротити або винести в `reference.md`.

---

## Закриті (опційно)

| Дата | Skill | Що зробили (PR / коміт) |
|------|-------|-------------------------|
| 2026-04-12 | `figma-screen-from-app` | Дописано C.1 (`dynamic-page` / `getNodeByIdAsync`), C.2 (anti-pattern `resize` + hug), C.3 (шрифти, timeout, чеклист + скріншот); посилання на work-zone. Файл: `.cursor/skills/figma-screen-from-app/SKILL.md`. Довідка: `docs/figma-screen-from-app-skill-spec.md` — секція «Пастки». |
| 2026-04-12 | `figma-work-zone` | Узгоджено правила async/sync і перевірку `result`; extended reference про `resize(...,10)`. Файл: `.cursor/skills/figma-work-zone/SKILL.md`. |
| — | — | — |
