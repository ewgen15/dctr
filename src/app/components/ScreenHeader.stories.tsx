import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ScreenHeader } from './ScreenHeader';

/** Робочий фрейм у Figma (плейсхолдер + нотатка; COMPONENT ще не заведено). */
const FIGMA_SCREEN_HEADER_WIP =
  'https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2113';

const meta: Meta<typeof ScreenHeader> = {
  title: 'Components/ScreenHeader',
  component: ScreenHeader,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: FIGMA_SCREEN_HEADER_WIP,
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[383px] bg-[#f5f5f5]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleCenter: Story = {
  name: 'Заголовок по центру',
  render: () => <ScreenHeader variant="titleCenter" title="Лікарі" />,
};

export const BackTitle: Story = {
  name: 'Назад + заголовок',
  render: () => (
    <ScreenHeader variant="backTitle" title="Мої записи" onBack={fn()} />
  ),
};

export const BackTitleElevated: Story = {
  name: 'Назад + тінь знизу',
  render: () => (
    <ScreenHeader
      variant="backTitle"
      title="Мої записи"
      onBack={fn()}
      elevated
    />
  ),
};

export const BackTitleSticky: Story = {
  name: 'Назад + sticky (чекаут)',
  render: () => (
    <div className="relative h-[200px] overflow-auto rounded-lg border border-border bg-secondary">
      <ScreenHeader
        variant="backTitle"
        title="Оформлення замовлення"
        onBack={fn()}
        sticky
      />
      <div className="h-[400px] px-5 py-4 text-sm text-muted-foreground">
        Прокрутіть вміст — шапка лишається зверху.
      </div>
    </div>
  ),
};
