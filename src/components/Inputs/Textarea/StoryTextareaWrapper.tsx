import React from "react";

import { Textarea, TextareaProps } from ".";

export type StoryInputWrapperProps = Omit<TextareaProps, "onChange" | "onBlur">;

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryInputWrapper = (props: StoryInputWrapperProps) => (
    <Textarea
        {...(props as TextareaProps)}
        onChange={(e) => {
            // eslint-disable-next-line no-console
            console.log(e); // console log used for documentation
        }}
        onBlur={(e) => {
            // eslint-disable-next-line no-console
            console.log(e); // console log used for documentation
        }}
    />
);

export default StoryInputWrapper;
