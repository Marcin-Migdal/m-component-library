import { CSSProperties, RefObject } from "react";
import { Placement } from "../../../helpers/getPosition/getPosition-types";

export type TooltipProps = {
  targetRef: RefObject<TargetElementType>;
  className?: string;
  style?: CSSProperties;
  placement?: `${Placement}`;
  openDelay?: number;
};

export type TargetElementType = HTMLElement | SVGSVGElement;

export type TooltipContentProps = {
  style: React.CSSProperties | undefined;
  tooltipRef: React.RefObject<HTMLDivElement>;
  className: string;
};

export type TooltipConfig = Partial<Omit<TooltipProps, "targetRef">>;
