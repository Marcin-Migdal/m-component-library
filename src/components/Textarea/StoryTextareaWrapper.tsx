import React from "react";

import * as GlobalInterfaces from "../global-interfaces";
import Textarea from ".";

export interface IStoryInputWrapperProps {
    value?: string;
    label?: string;
    labelType?: GlobalInterfaces.InputLabelType;
    placeholder?: string;
    defaultInternalValue?: string;
    autoFocus?: boolean;
    labelPercentageWidth?: GlobalInterfaces.LabelPercentageWidth;
    row?: number;
}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryInputWrapper = (props: IStoryInputWrapperProps) => <Textarea {...props} />;

export default StoryInputWrapper;
