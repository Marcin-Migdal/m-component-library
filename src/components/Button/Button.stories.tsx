import { ComponentStory, ComponentMeta } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Button from "./Button";
import "../Themes/dark-mode-default-theme.css";
import "../global-styles.css";

library.add(fas);

export default {
    title: "Morti-component-library/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <div className="container">
        <Button {...args} />
    </div>
);

export const buttonOne = Template.bind({});
buttonOne.args = {
    label: "Button one",
    onClick: () => console.log("Button one"),
};

// TODO! sprawdzić jak np w material ui albo prime react wyglądają przyciski disabled w dark mode, spróbować to zaimitować
// TODO! ukryć niektóre propsy w storybook'u, jak się nie da to jebać (ewentualnie zrobić component który jest wrapperem do przycisku, ale wrapper będzie miał tylko część propsów)
// TODO! wydać to w wersji 1.1.3 i zobaczyć czy wszystko (themes) działa

// TODO! wymyślić jakiś roadwork, jakie componenty będę dodawał.
