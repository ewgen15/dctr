import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router";
import MyVisits from "./MyVisits";

const meta: Meta<typeof MyVisits> = {
  title: "Pages/MyVisits",
  component: MyVisits,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Мої записи: список карток візитів, `OrderMedicinesSheet`. Окремий фрейм у Figma можна додати при синхронізації макету.",
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/visits"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
