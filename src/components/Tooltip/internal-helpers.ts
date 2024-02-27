import {
    TooltipPositionTypes,
    ITooltipDimensions,
    TargetElementType,
    TooltipStyleType,
    ITooltipPosition,
    ITooltipProps,
} from "./Tooltip-interfaces";

export const generateTooltipStyle = (
    targetElement: TargetElementType,
    tooltipElement: HTMLDivElement,
    position: TooltipPositionTypes,
    autoFixPosition: boolean,
    tooltipMargin: number,
    maxWidth: number
): TooltipStyleType => {
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    const rectTarget = targetElement.getBoundingClientRect();
    const rectTooltip = tooltipElement.getBoundingClientRect();

    const { top: targetTop, left: targetLeft, width: targetWidth, height: targetHeight } = rectTarget;
    let { width: tooltipWidth, height: tooltipHeight } = rectTooltip;

    tooltipWidth = tooltipWidth > maxWidth ? maxWidth : tooltipWidth;

    let tooltipPosition: ITooltipPosition;

    switch (position) {
        case "top":
            tooltipPosition = {
                top: targetTop - targetHeight - tooltipMargin + 7,
                left: targetLeft + targetWidth / 2 - tooltipWidth / 2,
            };

            if (autoFixPosition)
                tooltipPosition = getAutoPosition(rectTarget, tooltipMargin, {
                    ...tooltipPosition,
                    width: tooltipWidth,
                    height: tooltipHeight,
                });

            break;
        case "right":
            tooltipPosition = {
                top: targetTop + targetHeight / 2 - tooltipHeight / 2,
                left: targetLeft + targetWidth + tooltipMargin,
            };

            if (autoFixPosition) {
                tooltipPosition = getAutoPosition(rectTarget, tooltipMargin, {
                    ...tooltipPosition,
                    width: tooltipWidth,
                    height: tooltipHeight,
                });
            }

            break;
        case "bottom":
            tooltipPosition = {
                top: targetTop + targetHeight + tooltipMargin,
                left: targetLeft + targetWidth / 2 - tooltipWidth / 2,
            };

            if (autoFixPosition)
                tooltipPosition = getAutoPosition(rectTarget, tooltipMargin, {
                    ...tooltipPosition,
                    width: tooltipWidth,
                    height: tooltipHeight,
                });

            break;
        case "left":
            tooltipPosition = {
                top: targetTop + targetHeight / 2 - tooltipHeight / 2,
                left: targetLeft - tooltipWidth - tooltipMargin,
            };

            if (autoFixPosition) {
                tooltipPosition = getAutoPosition(rectTarget, tooltipMargin, {
                    ...tooltipPosition,
                    width: tooltipWidth,
                    height: tooltipHeight,
                });
            }

            break;
    }

    return { top: tooltipPosition.top + scrollY, left: tooltipPosition.left + scrollX, maxWidth: `${maxWidth}px` };
};

const getAutoPosition = (rectTarget: DOMRect, tooltipMargin: number, tooltipDimensions: ITooltipDimensions): ITooltipPosition => {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    const { top: targetTop, left: targetLeft, width: targetWidth, height: targetHeight } = rectTarget;
    const { top: tooltipTop, left: tooltipLeft, width: tooltipWidth, height: tooltipHeight } = tooltipDimensions;

    //* "Within"
    if (
        tooltipTop > 0 &&
        tooltipLeft > 0 &&
        tooltipTop + targetHeight <= windowHeight - tooltipMargin &&
        tooltipLeft + tooltipWidth <= windowWidth - tooltipMargin
    ) {
        return { top: tooltipTop, left: tooltipLeft };
    }
    //* "Top-Left"
    else if (tooltipTop < 0 && tooltipLeft < 0) {
        return {
            top: targetTop + targetHeight + tooltipMargin,
            left: tooltipMargin,
        };
    }
    //* "Top-Right"
    else if (tooltipTop < 0 && tooltipLeft + tooltipWidth > windowWidth) {
        return {
            top: targetTop + targetHeight + tooltipMargin,
            left: windowWidth - tooltipWidth - tooltipMargin,
        };
    }
    //* "Bottom-Left"
    else if (tooltipTop + tooltipHeight > windowHeight && tooltipLeft < 0) {
        return {
            top: targetTop - tooltipMargin - targetHeight + 3,
            left: tooltipMargin,
        };
    }
    //* "Bottom-Right"
    else if (tooltipTop + tooltipHeight > windowHeight && tooltipLeft + tooltipWidth > windowWidth) {
        return {
            top: targetTop - tooltipMargin - targetHeight + 3,
            left: windowWidth - tooltipWidth - tooltipMargin,
        };
    }
    //* "Top"
    else if (tooltipTop < 0) {
        return {
            top: targetTop + targetHeight + tooltipMargin,
            left: tooltipLeft,
        };
    }
    //* "Left"
    else if (tooltipLeft < 0) {
        return {
            top: targetTop + targetHeight / 2 - tooltipHeight / 2,
            left: targetLeft + targetWidth + tooltipMargin,
        };
    }
    //* "Bottom"
    else if (tooltipTop + tooltipHeight > windowHeight) {
        return {
            top: targetTop - targetHeight - tooltipMargin + 3,
            left: tooltipLeft,
        };
    }
    //* "Right"
    else if (tooltipLeft + tooltipWidth > windowWidth) {
        return {
            top: targetTop + targetHeight / 2 - tooltipHeight / 2,
            left: targetLeft - tooltipWidth - tooltipMargin,
        };
    } else {
        return { top: tooltipTop, left: tooltipLeft };
    }
};

export const getTooltipPropsConfig = (
    disabled: boolean,
    tooltipConfig?: Partial<Omit<ITooltipProps, "targetRef">>
): Partial<Omit<ITooltipProps, "targetRef">> => {
    return {
        ...{
            position: "right",
            openDelay: disabled ? 300 : 150,
            autoFixPosition: true,
        },
        ...tooltipConfig,
    };
};
