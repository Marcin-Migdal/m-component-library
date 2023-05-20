import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import StoryColWrapper from "./StoryColWrapper";
import ThemeWrapper from "../ThemeWrapper";
import Row from "../Row/Row";

import "../global-styles.css";

export default {
    title: "Morti-component-library/Layout",
    component: StoryColWrapper,
} as ComponentMeta<typeof StoryColWrapper>;

const Template: ComponentStory<typeof StoryColWrapper> = (args) => (
    <ThemeWrapper theme="default-theme-dark-mode">
        <Row>
            <StoryColWrapper {...args} />
        </Row>
    </ThemeWrapper>
);

export const col = Template.bind({});

col.args = {
    sm: 12,
    md: 6,
    lg: 4,
    xl: 2,
    amountOfColumns: 6,
};
