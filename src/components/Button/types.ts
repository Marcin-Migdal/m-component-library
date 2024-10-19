import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties, MouseEvent, ReactNode } from "react";
import { TooltipProps } from "../Miscellaneous";

export enum ButtonIconPosition {
    LEFT = "left",
    RIGHT = "right",
}
export type VariantType = "outlined" | "full" | "text" | "neon";

type ButtonBaseProps = {
    children?: ReactNode;
    text?: string;
    disabled?: boolean;
    busy?: boolean;
    display?: boolean;
    icon?: IconProp;
    iconPosition?: `${ButtonIconPosition}`;
    className?: string;
    style?: CSSProperties;
    variant?: VariantType;
    tooltip?: ReactNode;
    disabledTooltip?: ReactNode;
    tooltipConfig?: Partial<Omit<TooltipProps, "targetRef">>;
};

type SubmitBtnProps = {
    onClick?: undefined;
    type: "submit";
};

type ResetBtnProps = {
    onClick?: undefined;
    type: "reset";
};

type BtnProps = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    type?: "button";
};

export type ButtonProps = ButtonBaseProps & (BtnProps | SubmitBtnProps | ResetBtnProps);
