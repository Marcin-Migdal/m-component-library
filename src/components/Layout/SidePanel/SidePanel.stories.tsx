import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import StorySidePanelWrapper from "./StorySidePanelWrapper";

export default {
  title: "M-component-library/Layout",
  component: StorySidePanelWrapper,
} as ComponentMeta<typeof StorySidePanelWrapper>;

const Template: ComponentStory<typeof StorySidePanelWrapper> = () => (
  <ThemeWrapper darkMode>
    <div style={{ padding: "1rem" }}>
      <StorySidePanelWrapper />
    </div>
  </ThemeWrapper>
);

export const sidePanel = Template.bind({});

sidePanel.args = {};
