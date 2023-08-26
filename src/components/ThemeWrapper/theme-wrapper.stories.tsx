import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Textarea from "../Textarea/Textarea";
import Checkbox from "../Checkbox/Checkbox";
import Dropdown from "../Dropdown/Dropdown";
import ThemeWrapper from "../ThemeWrapper";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "../global-styles.css";

library.add(fas);

export default {
    title: "Morti-component-library/Theme",
    component: ThemeWrapper,
} as ComponentMeta<typeof ThemeWrapper>;

const Template: ComponentStory<typeof ThemeWrapper> = (args) => (
    <ThemeWrapper {...args}>
        <div style={{ marginBottom: "20px" }}>
            <Button style={{ marginRight: "5px" }} variant="outlined" text="btn text" onClick={() => {}} />
            <Button style={{ marginRight: "5px" }} variant="full" text="btn text" onClick={() => {}} />
            <Button style={{ marginRight: "5px" }} variant="text" text="btn text" onClick={() => {}} />
        </div>
        <Input label="label" labelType="floating" labelPercentageWidth={80} />
        <Checkbox label="label" labelType="right" labelPercentageWidth={80} />
        <Textarea label="label" labelType="right" labelPercentageWidth={80} />
        <Dropdown label="label" labelType="right" labelPercentageWidth={80} />
        <Dropdown label="label" labelType="right" labelPercentageWidth={80} options={options} />
    </ThemeWrapper>
);

export const theme = Template.bind({});

theme.args = {
    theme: "light-blue-theme-dark-mode",
};

const options = [
    { label: "test 1", value: 1 },
    { label: "test 2", value: 2 },
];
