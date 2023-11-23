import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import StoryButtonWrapper from "./StoryButtonWrapper";
import ThemeWrapper from "../ThemeWrapper";

library.add(fas);

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
