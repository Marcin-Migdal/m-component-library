import { CalculatedPosition, Position } from "./getPosition-types";

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
        calculatedPosition: auto ? CalculatedPosition.AUTO_TOP : CalculatedPosition.TOP,
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
        calculatedPosition: auto ? CalculatedPosition.AUTO_BOTTOM : CalculatedPosition.BOTTOM,
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
        calculatedPosition: auto ? CalculatedPosition.AUTO_RIGHT : CalculatedPosition.RIGHT,
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
        calculatedPosition: auto ? CalculatedPosition.AUTO_LEFT : CalculatedPosition.LEFT,
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
