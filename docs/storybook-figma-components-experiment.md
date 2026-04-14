# Експеримент: окрема Figma-зона для компонентів зі Storybook

**Мова:** українська · [English version](./storybook-figma-components-experiment.en.md)

## Навіщо

Мати в **окремому просторі** (окрема **сторінка** або **Section** у Figma) макети **існуючих** UI-компонентів, які вже зібрані в **Storybook**, щоб:

1. **Відполірувати** їх у дизайні (відступи, типографіка, стани) без прив’язки до повного екрану.
2. Потім **зв’язати** між собою: спільні токени/змінні, **компоненти бібліотеки**, інстанси на екранах і в коді (`parameters.design` у stories).

Це **не** заміна [figma-screen-from-app](../.cursor/skills/figma-screen-from-app/SKILL.md) (там — цілі екрани). Тут фокус — **атоми/молекули** з бічної панелі Storybook: `Components/*`, `UI/*`.

---

## Де в Figma

- **Окрема сторінка** (рекомендовано для чистоти), наприклад: **«Компоненти — Storybook (WIP)»**, або
- **Section** на існуючій сторінці з явною назвою, наприклад: **`Компоненти — код ↔ дизайн`**.

Правила розміщення: [figma-work-zone](../.cursor/skills/figma-work-zone/SKILL.md) — мінімум **50 px** між сусідніми фреймами та відступ від краю зони **≥ 50 px**.

Ширина прев’ю під мобільний застосунок: **383 px** (як у декораторах Storybook), якщо не робите окремо desktop.

---

## Інвентар Storybook → черга для Figma

| Storybook (sidebar) | Файл | Примітка |
|---------------------|------|----------|
| `Components/BottomNav` | `BottomNav.stories.tsx` | Уже є `parameters.design` |
| `Components/StatusBar` | `StatusBar.stories.tsx` | Додати node-id після макету |
| `Components/ScreenHeader` | `ScreenHeader.stories.tsx` | Варіанти: центр / назад / sticky |
| `Components/VisitCard` | `VisitCard.stories.tsx` | Уже є Figma URL у story |
| `Components/DoctorCard` | `DoctorCard.stories.tsx` | База спільна з VisitCard |
| `Components/ActionButton` | `ActionButton.stories.tsx` | |
| `UI/Button` | `ui/button.stories.tsx` | Примітив з Untitled UI |

Сторінки **`Pages/*`** — окремий трек ([TASK-PLAN](./TASK-PLAN.md), таблиця Storybook); у цей експеримент можна не включати або тримати лише як посилання.

---

## Порядок роботи

1. **Storybook** (`npm run storybook`) — пройтися по stories з таблиці, зафіксувати варіанти (стани), які мають бути в Figma 1:1.
2. У Figma — для кожного блоку: **Frame** з назвою як у Storybook (наприклад `StatusBar / Default`), всередині відтворити або імпортувати з наявної бібліотеки.
3. Позначити в Figma **COMPONENT**, коли форма стабільна; далі — інстанси на екранах.
4. У коді — додати або оновити **`parameters.design.url`** у відповідному `*.stories.tsx` (node-id з Figma URL).
5. Журнал кандидатів і розбіжностей — за потреби [ui-components-backlog.md](./ui-components-backlog.md).

---

## Зв’язок «дизайн ↔ код»

- Один напрямок полірування: спочатку узгодити **джерело правди** (код або Figma), потім підтягнути друге.
- Після появи стабільного COMPONENT у файлі — storybook **Design** addon показує макет поруч із реалізацією.

---

## Статус експерименту

- **Файл Figma:** [Moblie APP](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP) (`eUrxfq0FkLzMZFkCLf58r0`)
- **Сторінка:** `Компоненти — Storybook (WIP)`
- **Робоча зона (Section):** `Компоненти — код ↔ дизайн` — відкрити в файлі: [node `147:2111`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2111)
- **Дата старту:** 2026-04-12

Усередині Section — **7 фреймів** під чергу з інвентарю. Підключено **інстанси** з поточного файлу: **StatusBar** (COMPONENT `147:2069`), **VisitCard** (`136:424`) у двох фреймах (окремо та як база для DoctorCard), **BottomNav** (`145:1177`). У фреймах **ScreenHeader**, **ActionButton**, **UI/Button** залишені текстові нотатки (локального COMPONENT немає; Button — реф у Untitled UI).

| Storybook | Figma (фрейм / нода для Design tab) |
|-----------|--------------------------------------|
| `Components/StatusBar` | COMPONENT [`147:2069`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2069) |
| `Components/ScreenHeader` | фрейм-нотатка [`147:2113`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2113) |
| `Components/VisitCard` | інстанс у [`147:2114`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2114) |
| `Components/DoctorCard` | той самий VisitCard у [`147:2115`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2115) |
| `Components/ActionButton` | фрейм-нотатка [`147:2116`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2116) |
| `Components/BottomNav` | інстанс у [`147:2117`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2117) |
| `UI/Button` | фрейм-нотатка [`147:2118`](https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2118) |

---

## Чеклист виконання

- [x] Створити сторінку та Section у Figma (Desktop Bridge), плейсхолдери під компоненти.
- [x] Заповнити фрейми інстансами / нотатками; узгодити розміри фреймів під контент.
- [ ] Перетворити стабільні шари на **COMPONENT** у файлі (де ще немає: ScreenHeader, ActionButton).
- [x] Прописати **`parameters.design.url`** у відповідних `*.stories.tsx` (StatusBar, ScreenHeader, DoctorCard, ActionButton; VisitCard / BottomNav / UI Button вже були або залишаються на Untitled).
- [ ] За потреби занести розбіжності в [ui-components-backlog.md](./ui-components-backlog.md).
