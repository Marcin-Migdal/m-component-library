import { PositionType, VariantType } from "./button-interfaces";
import Button from "./Button";
import React from "react";

export interface IStoryButtonWrapperProps {
    label: string;
    disabled?: boolean;
    busy?: boolean;
    display?: boolean;
    icon?: "trash" | "question" | "check" | "pen" | "car" | "car-side" | "cart-shopping" | "cart-plus";
    iconPosition?: PositionType;
    variant?: VariantType;
}

// This component is created only for storybook display purpose, i wanted to hide some of the props.
const StoryButtonWrapper = (props: IStoryButtonWrapperProps) => <Button {...props} onClick={() => {}} />;

export default StoryButtonWrapper;
