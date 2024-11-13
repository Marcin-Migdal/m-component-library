import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import ProgressSpinner from "./ProgressSpinner";

export default {
  title: "M-component-library/Miscellaneous",
  component: ProgressSpinner,
} as ComponentMeta<typeof ProgressSpinner>;

const Template: ComponentStory<typeof ProgressSpinner> = (args) => (
  <ThemeWrapper darkMode>
    <div style={{ padding: "1rem" }}>
      <ProgressSpinner {...args} />
    </div>
  </ThemeWrapper>
);

export const progressSpinner = Template.bind({});

progressSpinner.args = {};
