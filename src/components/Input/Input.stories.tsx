import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import ThemeWrapper from "../ThemeWrapper";
import { Input } from "./Input";

import "../global-styles.css";

library.add(fas);

export default {
    title: "Morti-component-library/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <Input {...args} />
    </ThemeWrapper>
);

export const inputOne = Template.bind({});
inputOne.args = {
    label: "Name",
    labelType: "right",
};
