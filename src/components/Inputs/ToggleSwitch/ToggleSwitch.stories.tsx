import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { SimpleInputLabel } from "../../global-types";
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import StoryToggleSwitchWrapper from "./StoryToggleSwitchWrapper";

export default {
  title: "M-component-library/Inputs",
  component: StoryToggleSwitchWrapper,
} as ComponentMeta<typeof StoryToggleSwitchWrapper>;

const Template: ComponentStory<typeof StoryToggleSwitchWrapper> = (args) => (
  <ThemeWrapper darkMode>
    <div style={{ padding: "1rem" }}>
      <StoryToggleSwitchWrapper {...args} />
    </div>
  </ThemeWrapper>
);

export const toggleSwitch = Template.bind({});

toggleSwitch.args = {
  label: "Toggle switch",
  labelType: SimpleInputLabel.LEFT,
  labelWidth: 30,
  size: "large",
};
