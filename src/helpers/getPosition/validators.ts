import { Position } from "./getPosition-types";

export const invalidTopPlacement = (position: Position, browserDeadZone: number): boolean => {
  return position.top + browserDeadZone - window.scrollY <= 0;
};

export const validateBottomPlacement = (
  position: Position,
  consumerRect: DOMRect,
  browserDeadZone: number
): boolean => {
  return position.top + consumerRect.height + browserDeadZone - window.scrollY >= window.innerHeight;
};

export const validateRightPlacement = (position: Position, consumerRect: DOMRect, browserDeadZone: number): boolean => {
  return position.left + consumerRect.width + browserDeadZone - window.scrollX >= window.innerWidth;
};

export const validateLeftPlacement = (position: Position, browserDeadZone: number): boolean => {
  return position.left + browserDeadZone <= 0;
};
