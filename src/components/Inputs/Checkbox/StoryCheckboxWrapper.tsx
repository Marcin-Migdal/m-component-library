import React from "react";

import Checkbox from "./Checkbox";
import { CheckboxProps } from "./types";

export type StoryCheckboxWrapperProps = Omit<CheckboxProps, "onChange">;

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryCheckboxWrapper = (props: StoryCheckboxWrapperProps) => (
    <Checkbox
        {...(props as CheckboxProps)}
        onChange={(event) => {
            // eslint-disable-next-line no-console
            console.log(event); // console log used for documentation
        }}
    />
);

export default StoryCheckboxWrapper;
