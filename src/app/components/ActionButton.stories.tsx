import type { Meta, StoryObj } from "@storybook/react";
import { Video, Stethoscope, FlaskConical, Building2 } from "lucide-react";
import { ActionButton } from "./ActionButton";

const meta: Meta<typeof ActionButton> = {
  title: "Components/ActionButton",
  component: ActionButton,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[383px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Записатись на прийом",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Онлайн консультація",
    icon: <Video className="size-5" />,
  },
};

export const AllHomeActions: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <ActionButton>Записатись на прийом</ActionButton>
      <ActionButton icon={<Video className="size-5" />}>Онлайн консультація</ActionButton>
      <ActionButton icon={<FlaskConical className="size-5" />}>Здати аналізи</ActionButton>
      <ActionButton icon={<Building2 className="size-5" />}>Послуги клініки</ActionButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Недоступно",
    disabled: true,
  },
};
