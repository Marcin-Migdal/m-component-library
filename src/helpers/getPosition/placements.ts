import { BottomPosition, LeftPosition, RightPosition, TopPosition } from "./getPosition-types";

export const getTopPlacement = (targetRect: DOMRect, margin: number): TopPosition => {
    return { bottom: document.body.clientHeight + targetRect.height + margin - targetRect.bottom, left: targetRect.left };
};

export const getBottomPlacement = (targetRect: DOMRect, margin: number): BottomPosition => {
    return { top: targetRect.bottom + margin, left: targetRect.left };
};

export const getRightPlacement = (targetRect: DOMRect, margin: number): RightPosition => {
    return { top: targetRect.top, left: targetRect.right + margin };
};

export const getLeftPlacement = (targetRect: DOMRect, margin: number): LeftPosition => {
    return { top: targetRect.top, right: document.body.clientWidth + targetRect.width + margin - targetRect.right };
};
