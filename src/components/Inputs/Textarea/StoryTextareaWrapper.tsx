import React from "react";

import Textarea, { TextareaProps } from ".";

export type IStoryInputWrapperProps = Omit<TextareaProps, "onChange" | "onBlur">;

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryInputWrapper = (props: IStoryInputWrapperProps) => (
    <Textarea {...(props as TextareaProps)} onChange={(e) => console.log(e)} onBlur={(e) => console.log(e)} />
);

export default StoryInputWrapper;
