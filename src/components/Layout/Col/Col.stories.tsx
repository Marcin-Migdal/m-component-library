import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import Row from "../Row/Row";
import StoryColWrapper from "./StoryColWrapper";

export default {
    title: "Morti-component-library/Layout",
    component: StoryColWrapper,
} as ComponentMeta<typeof StoryColWrapper>;

const Template: ComponentStory<typeof StoryColWrapper> = (args) => (
    <ThemeWrapper darkMode>
        <div style={{ padding: "1rem" }}>
            <Row>
                <StoryColWrapper {...args} />
            </Row>
        </div>
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
