import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { ButtonSize } from "../global-types";
import ThemeWrapper from "../ThemeWrapper/ThemeWrapper";
import StoryButtonWrapper from "./StoryButtonWrapper";

export default {
    title: "M-component-library/Button",
    component: StoryButtonWrapper,
} as ComponentMeta<typeof StoryButtonWrapper>;

const Template: ComponentStory<typeof StoryButtonWrapper> = (args) => (
    <ThemeWrapper darkMode>
        <div style={{ padding: "1rem" }}>
            <StoryButtonWrapper {...args} />
        </div>
    </ThemeWrapper>
);

export const button = Template.bind({});

button.args = {
    text: "Button one",
    icon: undefined,
    variant: "outlined",
    size: ButtonSize.MEDIUM,
};
