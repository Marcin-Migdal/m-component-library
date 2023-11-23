import React from "react";

import { LabelPercentageWidth } from "../global-interfaces";
import { CheckboxLabelType } from "./checkbox-interfaces";
import { Checkbox } from "./Checkbox";

export interface IStoryCheckboxWrapperProps {
    checked?: boolean;
    label?: string;
    labelType?: CheckboxLabelType;
    labelPercentageWidth?: LabelPercentageWidth;
}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryCheckboxWrapper = (props: IStoryCheckboxWrapperProps) => <Checkbox {...props} onChange={() => {}} />;

export default StoryCheckboxWrapper;
