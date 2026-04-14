import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router";
import VisitDetails from "./VisitDetails";

const FIGMA_VISIT_DETAILS =
  "https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=146-1916";

const meta: Meta<typeof VisitDetails> = {
  title: "Pages/VisitDetails",
  component: VisitDetails,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: FIGMA_VISIT_DETAILS,
    },
  },
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
