import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { ThemeWrapper } from "../ThemeWrapper";
import Accordion from "./Accordion";
import StoryAccordionWrapper from "./StoryAccordionWrapper";

export default {
  title: "M-component-library",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = () => (
  <ThemeWrapper darkMode>
    <div style={{ padding: "1rem" }}>
      <StoryAccordionWrapper />
    </div>
  </ThemeWrapper>
);

export const accordion = Template.bind({});

accordion.args = {};
