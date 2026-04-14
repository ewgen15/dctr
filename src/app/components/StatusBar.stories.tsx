import type { Meta, StoryObj } from '@storybook/react';
import StatusBar from './StatusBar';

/** COMPONENT StatusBar у файлі Moblie APP (зона «Компоненти — Storybook»). */
const FIGMA_STATUS_BAR =
  'https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2069';

const meta: Meta<typeof StatusBar> = {
  title: 'Components/StatusBar',
  component: StatusBar,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: FIGMA_STATUS_BAR,
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

export const Default: Story = {};
