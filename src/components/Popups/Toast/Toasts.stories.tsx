import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import StoryToastsWrapper from "./StoryToastsWrapper";

export default {
    title: "M-component-library/Popups",
    component: StoryToastsWrapper,
} as ComponentMeta<typeof StoryToastsWrapper>;

const Template: ComponentStory<typeof StoryToastsWrapper> = () => (
    <ThemeWrapper darkMode>
        <div style={{ padding: "1rem" }}>
            <StoryToastsWrapper />
        </div>
    </ThemeWrapper>
);

export const toasts = Template.bind({});

toasts.args = {
    autoClose: true,
    toastsPosition: "top-right",
};
