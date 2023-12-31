import { CSSProperties } from "react";
import { TooltipPositionTypes } from "./Tooltip";

const tooltipMargin: number = 6;
export const generateTooltipStyle = (targetElement: HTMLElement, tooltipElement: HTMLDivElement, position: TooltipPositionTypes) => {
    const { offsetTop: targetTop, offsetLeft: targetLeft, offsetWidth: targetWidth, offsetHeight: targetHeight } = targetElement;
    const { offsetTop: tooltipTop, offsetLeft: tooltipLeft, offsetWidth: tooltipWidth, offsetHeight: tooltipHeight } = tooltipElement;

    let _tooltipStyle: CSSProperties = {};

    switch (position) {
        case "top":
            _tooltipStyle = {
                top: targetTop - targetHeight - tooltipMargin + 3,
                left: targetLeft + targetWidth / 2 - tooltipWidth / 2,
            };
            break;
        case "right":
            _tooltipStyle = {
                top: targetTop + targetHeight / 2 - tooltipHeight / 2,
                left: targetLeft + targetWidth + tooltipMargin,
            };
            break;
        case "bottom":
            _tooltipStyle = {
                top: targetTop + targetHeight + tooltipMargin,
                left: targetLeft + targetWidth / 2 - tooltipWidth / 2,
            };
            break;
        case "left":
            _tooltipStyle = {
                top: targetTop + targetHeight / 2 - tooltipHeight / 2,
                left: targetLeft - tooltipWidth - tooltipMargin,
            };
            break;
    }

    return _tooltipStyle;
};
