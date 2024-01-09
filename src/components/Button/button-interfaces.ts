import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties, MouseEvent, ReactNode } from "react";

import { ITooltipProps } from "../Tooltip/Tooltip-interfaces";

export type PositionType = "left" | "right";
export type VariantType = "outlined" | "full" | "text";

interface IButtonCommonProps {
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
}

interface ITypeSubmitProps extends IButtonCommonProps {
    onClick?: undefined;
    type: "submit";
}

interface ITypeResetProps extends IButtonCommonProps {
    onClick?: undefined;
    type: "reset";
}

interface ITypeButtonProps extends IButtonCommonProps {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    type?: "button";
}

export type IButtonProps = ITypeButtonProps | ITypeSubmitProps | ITypeResetProps;
