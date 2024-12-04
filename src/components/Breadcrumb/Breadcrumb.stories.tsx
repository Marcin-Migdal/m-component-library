import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../ThemeWrapper/ThemeWrapper";
import StoryBreadcrumbWrapper from "./StoryButtonWrapper";

export default {
  title: "M-component-library",
  component: StoryBreadcrumbWrapper,
} as ComponentMeta<typeof StoryBreadcrumbWrapper>;

const Template: ComponentStory<typeof StoryBreadcrumbWrapper> = (args) => (
  <ThemeWrapper darkMode>
    <div style={{ padding: "1rem" }}>
      <StoryBreadcrumbWrapper {...args} />
    </div>
  </ThemeWrapper>
);

export const breadcrumb = Template.bind({});

breadcrumb.args = {
  disableLastCrumb: false,
  variant: "default",
};
