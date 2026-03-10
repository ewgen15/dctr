import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router";
import Home from "./Home";

const meta: Meta<typeof Home> = {
  title: "Pages/Home",
  component: Home,
  parameters: { layout: "fullscreen" },
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
