import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import StoryButtonWrapper from "./StoryButtonWrapper";
import "../Themes/dark-mode-light-blue-theme.css";
import "../global-styles.css";

library.add(fas);

export default {
    title: "Morti-component-library/Button",
    component: StoryButtonWrapper,
} as ComponentMeta<typeof StoryButtonWrapper>;

const Template: ComponentStory<typeof StoryButtonWrapper> = (args) => (
    <div className="container">
        <StoryButtonWrapper {...args} />
    </div>
);

export const buttonOne = Template.bind({});
buttonOne.args = {
    label: "Button one",
    icon: undefined,
    variant: "text",
};

// TODO! sprawdzić jak np w material ui albo prime react wyglądają przyciski disabled w dark mode, spróbować to zaimitować
// TODO! ukryć niektóre propsy w storybook'u, jak się nie da to jebać (ewentualnie zrobić component który jest wrapperem do przycisku, ale wrapper będzie miał tylko część propsów)
// TODO! wydać to w wersji 1.1.3 i zobaczyć czy wszystko (themes) działa

// TODO! wymyślić jakiś roadwork, jakie componenty będę dodawał.
