import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import StoryInputWrapper from "./StoryInputWrapper";
import ThemeWrapper from "../../ThemeWrapper";

export default {
    title: "Morti-component-library/Inputs",
    component: StoryInputWrapper,
} as ComponentMeta<typeof StoryInputWrapper>;

const Template: ComponentStory<typeof StoryInputWrapper> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <div style={{ padding: "1rem" }}>
            <StoryInputWrapper {...args} />
        </div>
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
