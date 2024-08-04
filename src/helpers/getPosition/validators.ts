import { BottomPosition, LeftPosition, RightPosition, TopPosition } from "./getPosition-types";

export const validateTopPlacement = (position: TopPosition, consumerRect: DOMRect, browserDeadZone: number): boolean => {
    return document.body.clientHeight - position.bottom - consumerRect.height < browserDeadZone;
};

export const validateBottomPlacement = (position: BottomPosition, consumerRect: DOMRect, browserDeadZone: number): boolean => {
    return position.top + consumerRect.height > document.body.clientHeight - browserDeadZone;
};

export const validateRightPlacement = (position: RightPosition, consumerRect: DOMRect, browserDeadZone: number): boolean => {
    return position.left + consumerRect.width > document.body.clientWidth - browserDeadZone;
};

export const validateLeftPlacement = (position: LeftPosition, consumerRect: DOMRect, browserDeadZone: number): boolean => {
    return document.body.clientWidth - position.right - consumerRect.width < browserDeadZone;
};
