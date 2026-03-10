import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router";
import BottomNav from "./BottomNav";

const meta: Meta<typeof BottomNav> = {
  title: "Components/BottomNav",
  component: BottomNav,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, context) => (
      <MemoryRouter initialEntries={[context.parameters.initialPath ?? "/"]}>
        <div className="relative h-[200px] bg-[#f5f5f5]">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  parameters: { initialPath: "/" },
};

export const Visits: Story = {
  parameters: { initialPath: "/visits" },
};

export const Services: Story = {
  parameters: { initialPath: "/services" },
};

export const Profile: Story = {
  parameters: { initialPath: "/profile" },
};
