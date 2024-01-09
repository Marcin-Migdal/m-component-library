import { RefObject, ReactNode, CSSProperties } from "react";
import { Property } from "csstype";

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
    maxWidth?: Property.MaxWidth<string | number> | undefined;
}

export interface ITooltipPosition {
    top: number;
    left: number;
}

export interface ITooltipDimensions extends ITooltipPosition {
    width: number;
    height: number;
}

export type TargetElementType = HTMLElement | SVGSVGElement;
