import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { InputLabel } from "../../global-types";
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import StoryTextfieldWrapper from "./StoryTextfieldWrapper";

export default {
  title: "M-component-library/Inputs",
  component: StoryTextfieldWrapper,
} as ComponentMeta<typeof StoryTextfieldWrapper>;

const Template: ComponentStory<typeof StoryTextfieldWrapper> = (args) => (
  <ThemeWrapper darkMode>
    <div style={{ padding: "1rem" }}>
      <StoryTextfieldWrapper {...args} />
    </div>
  </ThemeWrapper>
);

export const textfield = Template.bind({});

textfield.args = {
  label: "Name",
  labelType: InputLabel.FLOATING,
  placeholder: "Name...",
  labelWidth: 20,
  type: "text",
};
