import React from "react";
import { ComponentSize } from "../global-types";
import Button from "./Button";
import { ButtonIconPosition, VariantType } from "./types";

export type StoryButtonWrapperProps = {
  text: string;
  disabled?: boolean;
  busy?: boolean;
  display?: boolean;
  icon?: "none" | "trash" | "question" | "check" | "pen" | "car" | "car-side" | "cart-shopping" | "cart-plus";
  iconPosition?: `${ButtonIconPosition}`;
  variant?: VariantType;
  tooltip?: string;
  disabledTooltip?: string;
  size?: ComponentSize;
};

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryButtonWrapper = ({ icon, ...other }: StoryButtonWrapperProps) => (
  <Button {...other} icon={icon === "none" ? undefined : icon} onClick={() => {}} />
);

export default StoryButtonWrapper;
