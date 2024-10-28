import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import Overlay from "./Overlay";

export default {
    title: "M-component-library/Miscellaneous",
    component: Overlay,
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = () => (
    <ThemeWrapper darkMode>
        <Overlay>Overlay content</Overlay>
    </ThemeWrapper>
);

export const overlay = Template.bind({});
