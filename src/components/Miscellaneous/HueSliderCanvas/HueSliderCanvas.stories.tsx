import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import { HueSliderCanvas } from "./HueSliderCanvas";

export default {
    title: "Morti-component-library/Miscellaneous",
    component: HueSliderCanvas,
} as ComponentMeta<typeof HueSliderCanvas>;

const Template: ComponentStory<typeof HueSliderCanvas> = (args) => (
    <ThemeWrapper darkMode>
        <div style={{ padding: "1rem" }}>
            <HueSliderCanvas {...args} />
        </div>
    </ThemeWrapper>
);

export const hueSlider = Template.bind({});
