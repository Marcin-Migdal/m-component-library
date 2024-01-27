import React from "react";

import { ADVANCED_MASKS_CONFIGS, AdvancedInputMasksTypes } from "./internal-helpers";
import { INPUT_MASKS, InputTypes } from "./Input-interfaces";
import Input from "./Input";

import * as GlobalInterfaces from "../../global-interfaces";

export type IStoryInputWrapperProps = {
    value?: string;
    label?: string;
    labelType?: GlobalInterfaces.InputLabelType;
    placeholder?: string;
    defaultInternalValue?: string;
    type?: InputTypes;
    autoFocus?: boolean;
    labelPercentageWidth?: GlobalInterfaces.LabelPercentageWidth;
    mask?: INPUT_MASKS | string;
    advancedMask?: AdvancedInputMasksTypes;
};

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryInputWrapper = (props: IStoryInputWrapperProps) => {
    let _props: any = { ...props };

    if (props.advancedMask) {
        delete _props.mask;
        _props.advancedMask = ADVANCED_MASKS_CONFIGS[props.advancedMask];
    }

    return <Input {..._props} />;
};

export default StoryInputWrapper;
