import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper";
import StoryTextfieldWrapper from "./StoryTextfieldWrapper";

export default {
    title: "Morti-component-library/Inputs",
    component: StoryTextfieldWrapper,
} as ComponentMeta<typeof StoryTextfieldWrapper>;

const Template: ComponentStory<typeof StoryTextfieldWrapper> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <div style={{ padding: "1rem" }}>
            <StoryTextfieldWrapper {...args} />
        </div>
    </ThemeWrapper>
);

export const textfield = Template.bind({});

textfield.args = {
    label: "Name",
    labelType: "floating",
    placeholder: "Name...",
    labelWidth: 20,
    type: "text",
};
