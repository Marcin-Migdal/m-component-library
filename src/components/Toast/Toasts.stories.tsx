import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import StoryToastsWrapper from "./StoryToastsWrapper";
import ThemeWrapper from "../ThemeWrapper";

import "../global-styles.css";

library.add(fas);

export default {
    title: "Morti-component-library/Toast",
    component: StoryToastsWrapper,
} as ComponentMeta<typeof StoryToastsWrapper>;

const Template: ComponentStory<typeof StoryToastsWrapper> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <StoryToastsWrapper />
    </ThemeWrapper>
);

export const toasts = Template.bind({});

toasts.args = {
    autoClose: true,
    toastsPosition: "top-right",
};
