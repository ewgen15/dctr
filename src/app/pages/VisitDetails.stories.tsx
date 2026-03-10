import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router";
import VisitDetails from "./VisitDetails";

const meta: Meta<typeof VisitDetails> = {
  title: "Pages/VisitDetails",
  component: VisitDetails,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/visit/1"]}>
        <Routes>
          <Route path="/visit/:id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
