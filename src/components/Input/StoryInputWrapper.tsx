import React from "react";

import { InputTypes, LabelPercentageWidth } from "./Input-interfaces";
import Input from "./Input";

export interface IStoryInputWrapperProps {
    value?: string;
    label?: string;
    labelType?: "left" | "right" | "floating";
    placeholder?: string;
    defaultInternalValue?: string;
    type?: InputTypes;
    autoFocus?: boolean;
    labelPercentageWidth?: LabelPercentageWidth;
}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryInputWrapper = (props: IStoryInputWrapperProps) => <Input {...props} />;

export default StoryInputWrapper;
