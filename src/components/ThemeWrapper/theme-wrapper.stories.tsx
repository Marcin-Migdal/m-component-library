import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import StoryThemeWrapper from "./StoryThemeWrapper";

library.add(fas);

export default {
    title: "Morti-component-library/Theme",
    component: StoryThemeWrapper,
} as ComponentMeta<typeof StoryThemeWrapper>;

const Template: ComponentStory<typeof StoryThemeWrapper> = (args) => <StoryThemeWrapper {...args} />;

export const theme = Template.bind({});

theme.args = {
    theme: "light-blue-theme-dark-mode",
};
