import React from "react";
import Icon from "./Icon";

import { IconName as FabIconName } from "@fortawesome/free-brands-svg-icons";
import { IconName as FasIconName } from "@fortawesome/free-solid-svg-icons";

export interface IStoryIconWrapperProps {
    iconPrefix: "fas" | "fab";
    icon: FasIconName | FabIconName;
}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryIconWrapper = ({ iconPrefix, icon }: IStoryIconWrapperProps) => {
    return <Icon style={{ color: "var(--white)" }} icon={[iconPrefix, icon]} />;
};

export default StoryIconWrapper;
