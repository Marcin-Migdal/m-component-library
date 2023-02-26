import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import StoryButtonWrapper from "./StoryButtonWrapper";
import ThemeWrapper from "../ThemeWrapper";
import "../global-styles.css";

library.add(fas);

export default {
    title: "Morti-component-library/Button",
    component: StoryButtonWrapper,
} as ComponentMeta<typeof StoryButtonWrapper>;

const Template: ComponentStory<typeof StoryButtonWrapper> = (args) => (
    <ThemeWrapper>
        <StoryButtonWrapper {...args} />
    </ThemeWrapper>
);

export const buttonOne = Template.bind({});
buttonOne.args = {
    label: "Test",
    icon: "trash",
};
