import React from "react";

import Textfield from "./Textfield";
import { TextfieldProps } from "./types";

export type StoryTextfieldWrapperProps = Omit<TextfieldProps, "onChange" | "onBlur" | "defaultInternalValue">;

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryTextfieldWrapper = (props: StoryTextfieldWrapperProps) => {
    return <Textfield {...(props as TextfieldProps)} onChange={(e) => console.log(e)} onBlur={(e) => console.log(e)} />;
};

export default StoryTextfieldWrapper;
