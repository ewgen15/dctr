import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router";
import Home from "./Home";

/** Moblie APP — фрейм головного екрану (перевір node-id у файлі, якщо фрейм перейменували). */
const FIGMA_HOME_SCREEN =
  "https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=143-1016";

const meta: Meta<typeof Home> = {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: FIGMA_HOME_SCREEN,
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
