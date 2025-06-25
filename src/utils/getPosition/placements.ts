import { CalculatedPosition, Position, SecondaryPlacement } from "./getPosition-types";

//! Function that return left position for getTopPlacement, getBottomPlacement
const getVerticalLeftPosition = (
  targetRect: DOMRect,
  consumerRect: DOMRect,
  secondaryPlacement: `${SecondaryPlacement}`
): number => {
  if (secondaryPlacement === SecondaryPlacement.START) {
    return targetRect.left + window.scrollX;
  }

  if (secondaryPlacement === SecondaryPlacement.END) {
    return targetRect.right - consumerRect.width + window.scrollX;
  }

  return targetRect.left + window.scrollX + targetRect.width / 2 - consumerRect.width / 2;
};

//! Function that return top position for getRightPlacement, getLeftPlacement
const getHorizontalTopPosition = (
  targetRect: DOMRect,
  consumerRect: DOMRect,
  secondaryPlacement: `${SecondaryPlacement}`
): number => {
  if (secondaryPlacement === SecondaryPlacement.START) {
    return targetRect.top + window.scrollY;
  }

  if (secondaryPlacement === SecondaryPlacement.END) {
    return targetRect.bottom - consumerRect.height + window.scrollY;
  }

  return targetRect.top + window.scrollY + targetRect.height / 2 - consumerRect.height / 2;
};

export const getTopPlacement = (
  targetRect: DOMRect,
  consumerRect: DOMRect,
  margin: number,
  secondaryPlacement: `${SecondaryPlacement}`,
  auto: boolean
): Position => {
  return {
    top: targetRect.top - margin - consumerRect.height + window.scrollY,
    left: getVerticalLeftPosition(targetRect, consumerRect, secondaryPlacement),
    calculatedPosition: auto ? CalculatedPosition.AUTO_TOP : CalculatedPosition.TOP,
  };
};

export const getBottomPlacement = (
  targetRect: DOMRect,
  consumerRect: DOMRect,
  margin: number,
  secondaryPlacement: `${SecondaryPlacement}`,
  auto: boolean
): Position => {
  return {
    top: targetRect.bottom + margin + window.scrollY,
    left: getVerticalLeftPosition(targetRect, consumerRect, secondaryPlacement),
    calculatedPosition: auto ? CalculatedPosition.AUTO_BOTTOM : CalculatedPosition.BOTTOM,
  };
};

export const getRightPlacement = (
  targetRect: DOMRect,
  consumerRect: DOMRect,
  margin: number,
  secondaryPlacement: `${SecondaryPlacement}`,
  auto: boolean
): Position => {
  return {
    top: getHorizontalTopPosition(targetRect, consumerRect, secondaryPlacement),
    left: targetRect.right + margin + window.scrollX,
    calculatedPosition: auto ? CalculatedPosition.AUTO_RIGHT : CalculatedPosition.RIGHT,
  };
};

export const getLeftPlacement = (
  targetRect: DOMRect,
  consumerRect: DOMRect,
  margin: number,
  secondaryPlacement: `${SecondaryPlacement}`,
  auto: boolean
): Position => {
  return {
    top: getHorizontalTopPosition(targetRect, consumerRect, secondaryPlacement),
    left: targetRect.left - consumerRect.width - margin + window.scrollX,
    calculatedPosition: auto ? CalculatedPosition.AUTO_LEFT : CalculatedPosition.LEFT,
  };
};
