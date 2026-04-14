import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router";
import DoctorList from "./DoctorList";

/** Moblie APP — екран списку лікарів (перевір node-id у файлі після змін у Figma). */
const FIGMA_DOCTOR_LIST =
  "https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=145-1105";

const meta: Meta<typeof DoctorList> = {
  title: "Pages/DoctorList",
  component: DoctorList,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: FIGMA_DOCTOR_LIST,
    },
  },
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
