import React from "react";
import Button from "./Button";
import { ButtonIconPosition, VariantType } from "./types";

export type StoryButtonWrapperProps = {
    text: string;
    disabled?: boolean;
    busy?: boolean;
    display?: boolean;
    icon?: "trash" | "question" | "check" | "pen" | "car" | "car-side" | "cart-shopping" | "cart-plus";
    iconPosition?: `${ButtonIconPosition}`;
    variant?: VariantType;
    tooltip?: string;
    disabledTooltip?: string;
};

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryButtonWrapper = (props: StoryButtonWrapperProps) => <Button {...props} onClick={() => {}} />;

export default StoryButtonWrapper;
