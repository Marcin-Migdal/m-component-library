import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import StoryCheckboxWrapper from "./StoryCheckboxWrapper";
import ThemeWrapper from "../../ThemeWrapper";

export default {
    title: "Morti-component-library/Inputs",
    component: StoryCheckboxWrapper,
} as ComponentMeta<typeof StoryCheckboxWrapper>;

const Template: ComponentStory<typeof StoryCheckboxWrapper> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <div style={{ padding: "1rem" }}>
            <StoryCheckboxWrapper {...args} />
        </div>
    </ThemeWrapper>
);

export const checkbox = Template.bind({});

checkbox.args = {
    label: "Checkbox",
    labelType: "left",
    labelPercentageWidth: 30,
};
