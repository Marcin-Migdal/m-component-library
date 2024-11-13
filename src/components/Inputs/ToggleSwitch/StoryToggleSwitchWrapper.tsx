import React from "react";

import ToggleSwitch from "./ToggleSwitch";
import { ToggleSwitchProps } from "./types";

export type StoryCheckboxWrapperProps = Omit<ToggleSwitchProps, "onChange">;

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryCheckboxWrapper = (props: StoryCheckboxWrapperProps) => (
  <ToggleSwitch
    {...(props as ToggleSwitchProps)}
    onChange={(event) => {
      // eslint-disable-next-line no-console
      console.log(event); // console log used for documentation
    }}
  />
);

export default StoryCheckboxWrapper;
