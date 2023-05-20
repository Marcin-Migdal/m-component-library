import React from "react";
import Checkbox from "./Checkbox";
import { LabelPercentageWidth } from "./checkbox-interfaces";

export interface IStoryCheckboxWrapperProps {
    checked?: boolean;
    label?: string;
    labelType?: "left" | "right";
    labelPercentageWidth?: LabelPercentageWidth;
}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryCheckboxWrapper = (props: IStoryCheckboxWrapperProps) => <Checkbox {...props} onChange={() => {}} />;

export default StoryCheckboxWrapper;
