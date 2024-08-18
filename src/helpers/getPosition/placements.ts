import { Position } from "./getPosition-types";

export const getTopPlacement = (
    targetRect: DOMRect,
    consumerRect: DOMRect,
    margin: number,
    centerConsumer: boolean,
    auto: boolean
): Position => {
    return {
        top: targetRect.top - margin - consumerRect.height + window.scrollY,
        left: getVerticalLeftPosition(targetRect, consumerRect, centerConsumer),
        positionType: auto ? "auto-top" : "top",
    };
};

export const getBottomPlacement = (
    targetRect: DOMRect,
    consumerRect: DOMRect,
    margin: number,
    centerConsumer: boolean,
    auto: boolean
): Position => {
    return {
        top: targetRect.bottom + margin + window.scrollY,
        left: getVerticalLeftPosition(targetRect, consumerRect, centerConsumer),
        positionType: auto ? "auto-bottom" : "bottom",
    };
};

export const getRightPlacement = (
    targetRect: DOMRect,
    consumerRect: DOMRect,
    margin: number,
    centerConsumer: boolean,
    auto: boolean
): Position => {
    return {
        top: getHorizontalTopPosition(targetRect, consumerRect, centerConsumer),
        left: targetRect.right + margin + window.scrollX,
        positionType: auto ? "auto-right" : "right",
    };
};

export const getLeftPlacement = (
    targetRect: DOMRect,
    consumerRect: DOMRect,
    margin: number,
    centerConsumer: boolean,
    auto: boolean
): Position => {
    return {
        top: getHorizontalTopPosition(targetRect, consumerRect, centerConsumer),
        left: targetRect.left - consumerRect.width - margin + window.scrollX,
        positionType: auto ? "auto-left" : "left",
    };
};

//! Function that return left position for getTopPlacement, getBottomPlacement
const getVerticalLeftPosition = (targetRect: DOMRect, consumerRect: DOMRect, centerConsumer: boolean): number => {
    return centerConsumer
        ? targetRect.left + window.scrollX + targetRect.width / 2 - consumerRect.width / 2
        : targetRect.left + window.scrollX;
};

//! Function that return top position for getRightPlacement, getLeftPlacement
const getHorizontalTopPosition = (targetRect: DOMRect, consumerRect: DOMRect, centerConsumer: boolean): number => {
    return centerConsumer
        ? targetRect.top + window.scrollY + targetRect.height / 2 - consumerRect.height / 2
        : targetRect.top + window.scrollY;
};
