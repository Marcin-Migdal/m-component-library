import React from "react";
import Icon from "./Icon";

import { IconName as FabIconName } from "@fortawesome/free-brands-svg-icons";
import { IconName as FasIconName } from "@fortawesome/free-solid-svg-icons";

export type StoryIconWrapperProps = {
    iconPrefix: "fas" | "fab";
    icon: FasIconName | FabIconName;
};

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryIconWrapper = ({ iconPrefix, icon }: StoryIconWrapperProps) => {
    return <Icon style={{ color: "var(--white)" }} icon={[iconPrefix, icon]} />;
};

export default StoryIconWrapper;
