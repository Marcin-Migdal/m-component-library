import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper";
import ColorPicker from "./ColorPicker";

export default {
    title: "Morti-component-library/Inputs",
    component: ColorPicker,
} as ComponentMeta<typeof ColorPicker>;

const Template: ComponentStory<typeof ColorPicker> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <div style={{ padding: "1rem" }}>
            <ColorPicker {...args} />
        </div>
    </ThemeWrapper>
);

export const colorPicker = Template.bind({});

colorPicker.args = {
    label: "Color",
};
