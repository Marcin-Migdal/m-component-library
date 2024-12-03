import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../ThemeWrapper/ThemeWrapper";
import { Breadcrumb } from "./Breadcrumb";

export default {
  title: "M-component-library",
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = () => (
  <ThemeWrapper darkMode>
    <div style={{ padding: "1rem" }}>
      <Breadcrumb />
    </div>
  </ThemeWrapper>
);

export const breadcrumb = Template.bind({});

breadcrumb.args = {};
