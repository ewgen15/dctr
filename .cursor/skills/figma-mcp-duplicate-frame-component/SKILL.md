---
name: figma-mcp-duplicate-frame-component
description: >-
  Duplicates a Figma screen frame and replaces a detached inner frame with a
  component instance via user-figma-console (figma_execute). Use when the user
  wants a copy of a screen where a section must use a real component instance
  (e.g. VisitCard), or when fixing detached frames after cloning in Moblie APP.
---

# Figma MCP: дубль екрана + заміна фрейма на інстанс компонента

## Передумови

1. **Figma Desktop** з потрібним файлом.
2. **Figma Desktop Bridge** (Plugins → Development → Figma Desktop Bridge → Run).
3. Перевірка: `figma_get_status` з `probe: true` → `setup.valid: true`, `probeResult.success: true`.
4. **Node IDs** брати з поточного файлу (`figma_get_file_for_plugin` / макет); ID не переносити між сесіями без перевірки.

## Коли застосовувати

- На екрані блок зроблено як **FRAME** з тим самим ім’ям, що й **COMPONENT** — потрібна **копія екрана**, де картка — саме **INSTANCE**.
- Після `clone()` дублікат містить ті самі відірвані шари; їх треба замінити на `component.createInstance()`.

## Алгоритм (figma_execute)

1. `getNodeByIdAsync(screenFrameId)` — має бути `FRAME`.
2. `getNodeByIdAsync(componentId)` — має бути `COMPONENT`.
3. `const duplicate = screen.clone()`.
4. Змістити дублікат (наприклад `duplicate.x = screen.x + screen.width + offset`), щоб не перекривав оригінал.
5. У дублікаті знайти дочірній вузол: `duplicate.findOne(n => n.name === 'VisitCard' && n.type === 'FRAME')` (ім’я та тип підлаштувати під макет).
6. Зберегти `parent`, `index`, `x`, `y`, `width`, `height`; `cardFrame.remove()`.
7. `const instance = comp.createInstance()`; виставити `x`, `y`; за потреби `resize()` у `try/catch`.
8. `parent.insertChild(index, instance)` — зберегти порядок шарів.
9. `figma.viewport.scrollAndZoomIntoView([duplicate])`; опційно `selection = [duplicate]`.

## Приклад (DoctorNow / Moblie APP)

| Вузол | Node ID |
|-------|---------|
| Екран Home | `117:253` |
| Компонент VisitCard | `136:424` |
| Відірваний фрейм картки всередині Home | `VisitCard`, `FRAME` |

Після успішного запуску на канвасі **« AI Experiments»** з’являється фрейм на кшталт **«Home — копія (VisitCard)»** (ID генерується новий, наприклад `139:259`).

## Валідація

- Після змін: `figma_get_file_for_plugin` / скріншот (`figma_take_screenshot` або `figma_capture_screenshot` за схемою MCP) — переконатися, що в дублікаті вузол картки має тип **INSTANCE**, а не **FRAME**.

## Обмеження

- Потрібен активний **Desktop Bridge**; без нього `figma_execute` не виконється.
- Для бібліотечних компонентів з іншого файлу — окремі інструменти (`figma_instantiate_component`, ключі варіантів); цей skill — для **локального COMPONENT** у тому ж файлі.

## Опційно після задачі

- **[skill-retrospective](../skill-retrospective/SKILL.md)** — побажання до skill; [беклог покращень](../../docs/skill-improvements-backlog.md).
