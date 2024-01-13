import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties, MouseEvent, ReactNode } from "react";

import { ITooltipProps } from "../Tooltip/Tooltip-interfaces";

export type PositionType = "left" | "right";
export type VariantType = "outlined" | "full" | "text" | "neon";

type IButtonBaseProps = {
    children?: any;
    text: string;
    disabled?: boolean;
    busy?: boolean;
    display?: boolean;
    icon?: IconProp;
    iconPosition?: PositionType;
    className?: string;
    style?: CSSProperties;
    variant?: VariantType;
    tooltip?: ReactNode;
    disabledTooltip?: ReactNode;
    tooltipConfig?: Partial<Omit<ITooltipProps, "targetRef">>;
};

type ISubmitBtnProps = {
    onClick?: undefined;
    type: "submit";
};

type IResetBtnProps = {
    onClick?: undefined;
    type: "reset";
};

type IBtnProps = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    type?: "button";
};

export type IButtonProps = IButtonBaseProps & (IBtnProps | ISubmitBtnProps | IResetBtnProps);
