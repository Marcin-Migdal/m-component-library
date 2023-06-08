import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Textarea from "../Textarea/Textarea";
import Checkbox from "../Checkbox/Checkbox";
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
        <Input label="label" labelType="floating" />
        <Checkbox label="label" labelType="right" labelPercentageWidth={80} />
        <Textarea label="label" labelType="right" labelPercentageWidth={80} />
    </ThemeWrapper>
);

export const theme = Template.bind({});

theme.args = {
    theme: "light-blue-theme-dark-mode",
};
