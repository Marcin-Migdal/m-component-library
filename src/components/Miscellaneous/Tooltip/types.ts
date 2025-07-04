import { CSSProperties, RefObject } from "react";
import { PrimaryPlacement, SecondaryPlacement } from "../../../utils/getPosition/getPosition-types";

export type TooltipProps = {
  /** A reference to the target element the tooltip is associated with. */
  targetRef: RefObject<TargetElementType | null>;

  /** Additional CSS class for styling the tooltip.
   * @default undefined */
  className?: string;

  /** Inline styles for the tooltip.
   * @default undefined */
  style?: CSSProperties;

  /** Primary position of the tooltip relative to the target element. */
  primaryPlacement?: `${PrimaryPlacement}`;

  /** Secondary position of the tooltip relative to the target element. */
  secondaryPlacement?: `${SecondaryPlacement}`;

  /** Delay (in milliseconds) before the tooltip opens.
   * @default 0 */
  openDelay?: number;
};

/** The type of element that the tooltip is attached to. */
export type TargetElementType = HTMLElement | SVGSVGElement;

/** Props for the content of the tooltip. */
export type TooltipContentProps = {
  /** Inline styles for the tooltip content. */
  style: React.CSSProperties | undefined;

  /** A reference to the tooltip content element. */
  tooltipRef: React.RefObject<HTMLDivElement | null>;

  /** Additional CSS class for styling the tooltip content.
   * @default undefined */
  className?: string;
};

/** Configuration object for the Tooltip component without the target reference. */
export type TooltipConfig = Partial<Omit<TooltipProps, "targetRef">>;
