import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { SimpleInputLabel } from "../../global-types";
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import StoryCheckboxWrapper from "./StoryCheckboxWrapper";

export default {
    title: "M-component-library/Inputs",
    component: StoryCheckboxWrapper,
} as ComponentMeta<typeof StoryCheckboxWrapper>;

const Template: ComponentStory<typeof StoryCheckboxWrapper> = (args) => (
    <ThemeWrapper darkMode>
        <div style={{ padding: "1rem" }}>
            <StoryCheckboxWrapper {...args} />
        </div>
    </ThemeWrapper>
);

export const checkbox = Template.bind({});

checkbox.args = {
    label: "Checkbox",
    labelType: SimpleInputLabel.LEFT,
    labelWidth: 30,
};
