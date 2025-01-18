import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { InputLabel } from "../../global-types";
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import { DateField } from "./DateField";

export default {
  title: "M-component-library/Inputs",
  component: DateField,
} as ComponentMeta<typeof DateField>;

const Template: ComponentStory<typeof DateField> = (args) => (
  <ThemeWrapper darkMode>
    <div style={{ padding: "1rem" }}>
      <DateField {...args} />
    </div>
  </ThemeWrapper>
);

export const dateField = Template.bind({});

dateField.args = {
  label: "Name",
  labelType: InputLabel.FLOATING,
  placeholder: "Name...",
  labelWidth: 20,
};
