import type { Preview } from "@storybook/react";
import React from "react";

import { ThemeWrapper } from "../src/components/ThemeWrapper";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeWrapper darkMode>
        <div style={{ padding: "1rem" }}>
          <Story />
        </div>
      </ThemeWrapper>
    ),
  ],
};

export default preview;
