import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import StoryButtonWrapper from "./StoryButtonWrapper";
import ThemeWrapper from "../ThemeWrapper";

export default {
    title: "Morti-component-library/Button",
    component: StoryButtonWrapper,
} as ComponentMeta<typeof StoryButtonWrapper>;

const Template: ComponentStory<typeof StoryButtonWrapper> = (args) => (
    <ThemeWrapper theme="default-theme-dark-mode">
        <div style={{ padding: "1rem" }}>
            <StoryButtonWrapper {...args} />
        </div>
    </ThemeWrapper>
);

export const button = Template.bind({});

button.args = {
    text: "Button one",
    icon: undefined,
    variant: "text",
};
