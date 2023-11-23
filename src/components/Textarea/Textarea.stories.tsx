import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import ThemeWrapper from "../ThemeWrapper";
import Textarea from "./Textarea";

library.add(fas);

export default {
    title: "Morti-component-library/Inputs",
    component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
    <ThemeWrapper theme="light-blue-theme-light-mode">
        <div style={{ padding: "1rem" }}>
            <Textarea {...args} />
        </div>
    </ThemeWrapper>
);

export const textarea = Template.bind({});

textarea.args = {
    label: "Name",
    labelType: "right",
    labelWidth: 20,
};
