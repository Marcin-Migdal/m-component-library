import { PrimaryPlacement } from "../../../../utils/getPosition/getPosition-types";
import { TooltipConfig } from "../types";

export const defaultTooltipConfig: TooltipConfig = {
  primaryPlacement: PrimaryPlacement.BOTTOM,
  openDelay: 250,
};

export const getTooltipPropsConfig = (tooltipConfig: TooltipConfig): TooltipConfig => {
  return {
    ...defaultTooltipConfig,
    ...tooltipConfig,
  };
};
