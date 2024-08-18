import { ITooltipProps } from "../Tooltip-interfaces";

type TooltipConfig = Partial<Omit<ITooltipProps, "targetRef">>;

export const defaultTooltipConfig: TooltipConfig = {
    placement: "bottom",
    openDelay: 250,
};

export const getTooltipPropsConfig = (tooltipConfig: TooltipConfig): TooltipConfig => {
    return {
        ...defaultTooltipConfig,
        ...tooltipConfig,
    };
};
