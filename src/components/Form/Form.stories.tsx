import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../ThemeWrapper/ThemeWrapper";
import StoryFormWrapper from "./StoryFormWrapper";

export default {
  title: "M-component-library",
  component: StoryFormWrapper,
} as ComponentMeta<typeof StoryFormWrapper>;

const Template: ComponentStory<typeof StoryFormWrapper> = () => (
  <ThemeWrapper darkMode>
    <div style={{ padding: "1rem" }}>
      <StoryFormWrapper />
    </div>
  </ThemeWrapper>
);

export const form = Template.bind({});

form.args = {};
