import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper";
import Textarea from "./Textarea";

export default {
    title: "Morti-component-library/Inputs",
    component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <div style={{ padding: "1rem" }}>
            <Textarea {...args} />
        </div>
    </ThemeWrapper>
);

export const textarea = Template.bind({});

textarea.args = {
    label: "Name",
    labelWidth: 20,
};
