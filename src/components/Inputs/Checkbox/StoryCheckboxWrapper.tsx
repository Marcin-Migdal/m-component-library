import React from "react";

import Checkbox from "./Checkbox";
import { CheckboxProps } from "./checkbox-interfaces";

export type IStoryCheckboxWrapperProps = Omit<CheckboxProps, "onChange">;

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryCheckboxWrapper = (props: IStoryCheckboxWrapperProps) => (
    <Checkbox {...(props as CheckboxProps)} onChange={(event) => console.log(event)} />
);

export default StoryCheckboxWrapper;
