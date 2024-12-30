import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import IconField from "./IconField";

export default {
  title: "M-component-library/Inputs",
  component: IconField,
} as ComponentMeta<typeof IconField>;

const Template: ComponentStory<typeof IconField> = (args) => (
  <ThemeWrapper darkMode>
    <div style={{ padding: "1rem" }}>
      <IconField {...args} />
    </div>
  </ThemeWrapper>
);

export const iconField = Template.bind({});

iconField.args = {
  label: "Icon",
};
