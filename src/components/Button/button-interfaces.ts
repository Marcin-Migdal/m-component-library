import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties, MouseEvent } from "react";

export type PositionType = "left" | "right";
export type VariantType = "outlined" | "full" | "text";

export interface IButtonProps {
    children?: any;
    text: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    busy?: boolean;
    display?: boolean;
    icon?: IconProp;
    iconPosition?: PositionType;
    className?: string;
    style?: CSSProperties;
    type?: "submit" | "reset" | "button";
    variant?: VariantType;
}
