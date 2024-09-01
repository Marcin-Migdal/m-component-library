import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import ProgressSpinner from "./ProgressSpinner";

export default {
    title: "Morti-component-library/Miscellaneous",
    component: ProgressSpinner,
} as ComponentMeta<typeof ProgressSpinner>;

const Template: ComponentStory<typeof ProgressSpinner> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <div style={{ padding: "1rem" }}>
            <ProgressSpinner {...args} />
        </div>
    </ThemeWrapper>
);

export const progressSpinner = Template.bind({});

progressSpinner.args = {};
