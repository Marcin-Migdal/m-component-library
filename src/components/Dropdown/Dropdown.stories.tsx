import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import ThemeWrapper from "../ThemeWrapper";
import Dropdown from "./Dropdown";

import "../global-styles.css";

library.add(fas);

export default {
    title: "Morti-component-library/Inputs",
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const options = [
    { label: "test 1", value: 1 },
    { label: "test 2", value: 2 },
    { label: "test 3", value: 3 },
];

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <Dropdown {...args} options={options} name="testDropdown" />
    </ThemeWrapper>
);

export const dropdown = Template.bind({});

dropdown.args = {
    label: "Name",
    labelType: "right",
    labelWidth: 20,
};
