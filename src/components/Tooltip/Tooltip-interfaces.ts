import { CSSProperties, RefObject } from "react";

import { Placement } from "../../helpers/getPosition/getPosition-types";

export interface ITooltipProps {
    targetRef: RefObject<TargetElementType>;
    className?: string;
    style?: CSSProperties;
    placement?: Placement;
    openDelay?: number;
}

export type TargetElementType = any | HTMLElement | SVGSVGElement;
