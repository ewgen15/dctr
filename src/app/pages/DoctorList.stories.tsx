import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router";
import DoctorList from "./DoctorList";

const meta: Meta<typeof DoctorList> = {
  title: "Pages/DoctorList",
  component: DoctorList,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/doctors"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
