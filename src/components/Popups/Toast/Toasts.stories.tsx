import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper";
import StoryToastsWrapper from "./StoryToastsWrapper";

export default {
    title: "Morti-component-library/Popups",
    component: StoryToastsWrapper,
} as ComponentMeta<typeof StoryToastsWrapper>;

const Template: ComponentStory<typeof StoryToastsWrapper> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
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
