import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import { ImageField } from "./ImageField";

export default {
  title: "M-component-library/Inputs",
  component: ImageField,
} as ComponentMeta<typeof ImageField>;

const Template: ComponentStory<typeof ImageField> = (args) => (
  <ThemeWrapper darkMode>
    <div style={{ padding: "1rem" }}>
      <ImageField {...args} />
    </div>
  </ThemeWrapper>
);

export const imageField = Template.bind({});

imageField.args = {
  label: "Image input",
  maxResolution: { width: 3001, height: 3999 },
};
