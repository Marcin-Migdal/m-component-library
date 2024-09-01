import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../ThemeWrapper/ThemeWrapper";
import StoryButtonWrapper from "./StoryButtonWrapper";

export default {
    title: "Morti-component-library/Button",
    component: StoryButtonWrapper,
} as ComponentMeta<typeof StoryButtonWrapper>;

const Template: ComponentStory<typeof StoryButtonWrapper> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
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
