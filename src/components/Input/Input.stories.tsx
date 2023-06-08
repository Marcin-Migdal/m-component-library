import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import StoryInputWrapper from "./StoryInputWrapper";
import ThemeWrapper from "../ThemeWrapper";

import "../global-styles.css";

library.add(fas);

export default {
    title: "Morti-component-library/Inputs",
    component: StoryInputWrapper,
} as ComponentMeta<typeof StoryInputWrapper>;

const Template: ComponentStory<typeof StoryInputWrapper> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <StoryInputWrapper {...args} />
    </ThemeWrapper>
);

export const input = Template.bind({});

input.args = {
    label: "Name",
    labelType: "right",
    labelPercentageWidth: 20,
    type: "text",
    customMask: undefined,
};
