import { RefObject, ReactNode, CSSProperties } from "react";

export type TooltipPositionTypes = "top" | "right" | "bottom" | "left";

export interface ITooltipProps {
    targetRef: RefObject<TargetElementType>;
    children: ReactNode;
    className?: string;
    position?: TooltipPositionTypes;
    style?: CSSProperties;
    autoFixPosition?: boolean;
    openDelay?: number;
    tooltipMargin?: number;
    maxWidth?: number;
}

export type TargetElementType = any | HTMLElement | SVGSVGElement;

//! INTERNAL HELPERS INTERFACES

export type TooltipStyleType = Pick<CSSProperties, "top" | "left" | "maxWidth">;

export interface ITooltipPosition {
    top: number;
    left: number;
}

export interface ITooltipDimensions extends ITooltipPosition {
    width: number;
    height: number;
}
