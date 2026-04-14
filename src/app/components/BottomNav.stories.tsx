import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router";
import BottomNav from "./BottomNav";

/** COMPONENT BottomNav у файлі Moblie APP (Storybook Design tab). */
const FIGMA_BOTTOM_NAV =
  "https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=145-1177";

const meta: Meta<typeof BottomNav> = {
  title: "Components/BottomNav",
  component: BottomNav,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: FIGMA_BOTTOM_NAV,
    },
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
