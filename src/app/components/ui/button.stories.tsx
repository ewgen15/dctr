import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Записатись", variant: "default" },
};

export const Secondary: Story = {
  args: { children: "Перенести", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "Деталі", variant: "outline" },
};

export const Destructive: Story = {
  args: { children: "Скасувати", variant: "destructive" },
};

export const Ghost: Story = {
  args: { children: "Пропустити", variant: "ghost" },
};

export const Small: Story = {
  args: { children: "Малий", size: "sm" },
};

export const Large: Story = {
  args: { children: "Великий", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Недоступно", disabled: true },
};
