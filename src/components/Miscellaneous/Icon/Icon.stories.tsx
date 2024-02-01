import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import StoryIconWrapper from "./StoryFormWrapper";
import ThemeWrapper from "../../ThemeWrapper";

export default {
    title: "Morti-component-library/Miscellaneous",
    component: StoryIconWrapper,
    argTypes: {
        iconPrefix: { control: "select" },
    },
} as ComponentMeta<typeof StoryIconWrapper>;

const Template: ComponentStory<typeof StoryIconWrapper> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
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
