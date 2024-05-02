import React from "react";

import Textfield from "./Textfield";
import { TextfieldProps } from "./Textfield-interfaces";

export type IStoryTextfieldWrapperProps = Omit<TextfieldProps, "onChange" | "onBlur" | "defaultInternalValue">;

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryTextfieldWrapper = (props: IStoryTextfieldWrapperProps) => {
    return <Textfield {...(props as TextfieldProps)} onChange={(e) => console.log(e)} onBlur={(e) => console.log(e)} />;
};

export default StoryTextfieldWrapper;
