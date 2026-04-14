import React from "react";
import type { Preview } from "@storybook/react";
import { I18nProvider } from "../src/app/i18n";
import "../src/styles/index.css";

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(I18nProvider, null, React.createElement(Story)),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
};

export default preview;
