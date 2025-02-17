import { CSSProperties } from "react";
import { ToggleIconPosition } from "../types";

export type AccordionToggleProps = {
  icon?: ToggleIconPosition;
  expandOnIconClick?: boolean;
  className?: string;
  style?: CSSProperties;
};
