import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import StoryCheckboxWrapper from "./StoryCheckboxWrapper";
import ThemeWrapper from "../ThemeWrapper";

import "../global-styles.css";

library.add(fas);

export default {
    title: "Morti-component-library/Inputs",
    component: StoryCheckboxWrapper,
} as ComponentMeta<typeof StoryCheckboxWrapper>;

const Template: ComponentStory<typeof StoryCheckboxWrapper> = (args) => (
    <ThemeWrapper theme="light-blue-theme-light-mode">
        <StoryCheckboxWrapper {...args} />
    </ThemeWrapper>
);

export const checkbox = Template.bind({});

checkbox.args = {
    label: "Checkbox",
    labelType: "left",
    labelPercentageWidth: 30,
};
