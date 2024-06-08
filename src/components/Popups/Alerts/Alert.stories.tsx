import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper";
import StoryAlertWrapper from "./StoryAlertWrapper";

export default {
    title: "Morti-component-library/Popups",
    component: StoryAlertWrapper,
} as ComponentMeta<typeof StoryAlertWrapper>;

const Template: ComponentStory<typeof StoryAlertWrapper> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <div style={{ padding: "1rem" }}>
            <StoryAlertWrapper {...args} />
        </div>
    </ThemeWrapper>
);

export const alert = Template.bind({});
