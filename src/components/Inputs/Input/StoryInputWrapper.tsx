import React from "react";

import { CUSTOM_INPUT_MASKS, INPUT_MASKS, InputTypes } from "./Input-interfaces";
import * as GlobalInterfaces from "../../global-interfaces";
import Input from "./Input";

export interface IStoryInputWrapperProps {
    value?: string;
    label?: string;
    labelType?: GlobalInterfaces.InputLabelType;
    placeholder?: string;
    defaultInternalValue?: string;
    type?: InputTypes;
    autoFocus?: boolean;
    labelPercentageWidth?: GlobalInterfaces.LabelPercentageWidth;
    mask?: INPUT_MASKS | string;
    customMask?: CUSTOM_INPUT_MASKS;
}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryInputWrapper = (props: IStoryInputWrapperProps) => <Input {...props} error="test" />;

export default StoryInputWrapper;
