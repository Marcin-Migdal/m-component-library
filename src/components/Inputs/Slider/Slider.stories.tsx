import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import Slider from "./Slider";

export default {
    title: "M-component-library/Inputs",
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
    <ThemeWrapper darkMode>
        <div style={{ padding: "1rem" }}>
            <Slider {...args} />
        </div>
    </ThemeWrapper>
);

export const slider = Template.bind({});

slider.args = {
    min: 0,
    max: 100,
    step: 0.1,
    label: "Range",
};
