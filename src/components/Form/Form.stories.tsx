import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import StoryFormWrapper from "./StoryFormWrapper";
import ThemeWrapper from "../ThemeWrapper";

export default {
    title: "Morti-component-library",
    component: StoryFormWrapper,
} as ComponentMeta<typeof StoryFormWrapper>;

const Template: ComponentStory<typeof StoryFormWrapper> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <div style={{ padding: "1rem" }}>
            <StoryFormWrapper />
        </div>
    </ThemeWrapper>
);

export const form = Template.bind({});

form.args = {};
