import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import StoryToastsWrapper from "./StoryToastsWrapper";
import ThemeWrapper from "../ThemeWrapper";

export default {
    title: "Morti-component-library",
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
