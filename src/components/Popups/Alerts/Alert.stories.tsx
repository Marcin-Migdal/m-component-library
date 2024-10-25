import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import StoryAlertWrapper from "./StoryAlertWrapper";

export default {
    title: "M-component-library/Popups",
    component: StoryAlertWrapper,
} as ComponentMeta<typeof StoryAlertWrapper>;

const Template: ComponentStory<typeof StoryAlertWrapper> = (args) => (
    <ThemeWrapper darkMode>
        <div style={{ padding: "1rem" }}>
            <StoryAlertWrapper {...args} />
        </div>
    </ThemeWrapper>
);

export const alert = Template.bind({});
