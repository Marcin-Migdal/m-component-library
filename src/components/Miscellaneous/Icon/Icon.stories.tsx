import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import StoryIconWrapper from "./StoryFormWrapper";

export default {
    title: "M-component-library/Miscellaneous",
    component: StoryIconWrapper,
} as ComponentMeta<typeof StoryIconWrapper>;

const Template: ComponentStory<typeof StoryIconWrapper> = (args) => (
    <ThemeWrapper darkMode>
        <div style={{ padding: "1rem" }}>
            <StoryIconWrapper {...args} />
        </div>
    </ThemeWrapper>
);

export const icon = Template.bind({});

icon.args = {
    iconPrefix: "fab",
    icon: "facebook",
};

icon.argTypes = {
    iconPrefix: { options: ["fab", "fas"], control: { type: "select" }, defaultValue: "fab" },
};
