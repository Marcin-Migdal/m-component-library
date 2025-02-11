import type { Preview } from "@storybook/react";
import React from "react";

import { ThemeWrapper } from "../src/components/ThemeWrapper";

const withGlobalDecorator = (Story, context) => {
  if (context.parameters.disableGlobalDecorator) {
    return <Story />;
  }

  return (
    <ThemeWrapper darkMode={context?.globals?.backgrounds?.value === "#333"}>
      <div style={{ padding: "1rem" }}>
        <Story />
      </div>
    </ThemeWrapper>
  );
};

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
  decorators: [withGlobalDecorator],
};

export default preview;
