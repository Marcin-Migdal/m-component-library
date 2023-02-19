import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { MouseEvent } from "react";

export type PositionType = "left" | "right";
export type VariantType = "outlined" | "full" | "text";

export interface IButtonProps {
    children?: any;
    label: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    busy?: boolean;
    display?: boolean;
    icon?: IconProp;
    iconPosition?: PositionType;
    className?: string;
    type?: "submit" | "reset" | "button";
    variant?: VariantType;
}
