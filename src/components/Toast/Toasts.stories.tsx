import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import ThemeWrapper from "../ThemeWrapper";

import "../global-styles.css";
import StoryToastsWrapper from "./StoryToastsWrapper";

library.add(fas);

export default {
    title: "Morti-component-library/Toast",
    component: StoryToastsWrapper,
} as ComponentMeta<typeof StoryToastsWrapper>;

const Template: ComponentStory<typeof StoryToastsWrapper> = (args) => (
    <ThemeWrapper theme="default-theme-dark-mode">
        <StoryToastsWrapper {...args} />
    </ThemeWrapper>
);

export const toasts = Template.bind({});

toasts.args = {};
