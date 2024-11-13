import { Placement } from "../../../../helpers/getPosition/getPosition-types";
import { TooltipConfig } from "../types";

export const defaultTooltipConfig: TooltipConfig = {
  placement: Placement.BOTTOM,
  openDelay: 250,
};

export const getTooltipPropsConfig = (tooltipConfig: TooltipConfig): TooltipConfig => {
  return {
    ...defaultTooltipConfig,
    ...tooltipConfig,
  };
};
