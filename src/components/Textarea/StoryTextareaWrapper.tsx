import React from "react";

import { LabelPercentageWidth } from "./Textarea-interfaces";
import Textarea from "./Textarea";

export interface IStoryInputWrapperProps {
    value?: string;
    label?: string;
    labelType?: "left" | "right" | "floating";
    placeholder?: string;
    defaultInternalValue?: string;
    autoFocus?: boolean;
    labelPercentageWidth?: LabelPercentageWidth;
    row?: number;
}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryInputWrapper = (props: IStoryInputWrapperProps) => <Textarea {...props} />;

export default StoryInputWrapper;
