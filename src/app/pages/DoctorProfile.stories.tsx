import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router";
import DoctorProfile from "./DoctorProfile";

/** Moblie APP — профіль лікаря (`/doctors/:id`). */
const FIGMA_DOCTOR_PROFILE =
  "https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=146-1748";

const meta: Meta<typeof DoctorProfile> = {
  title: "Pages/DoctorProfile",
  component: DoctorProfile,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: FIGMA_DOCTOR_PROFILE,
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/doctors/1"]}>
        <Routes>
          <Route path="/doctors/:id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Лікар з іншого id з каталогу. */
export const Doctor2: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/doctors/2"]}>
        <Routes>
          <Route path="/doctors/:id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

/** Стан «лікар не знайдений» (невідомий id). */
export const NotFound: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/doctors/unknown"]}>
        <Routes>
          <Route path="/doctors/:id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};
