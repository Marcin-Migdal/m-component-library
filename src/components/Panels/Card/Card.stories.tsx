import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../../ThemeWrapper";
import Card from "./Card";

export default {
    title: "Morti-component-library/Panels",
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <ThemeWrapper theme="light-blue-theme-dark-mode">
        <div style={{ padding: "1rem" }}>
            <Card style={{ width: "300px" }} {...args}>
                <h2 style={{ width: "100%", textAlign: "center", marginTop: "0px" }}>Card title</h2>

                <span style={{ display: "inline-block", width: "100%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </span>
            </Card>
        </div>
    </ThemeWrapper>
);

export const card = Template.bind({});

card.args = {
    variant: "default",
};
