import { getBottomPlacement, getLeftPlacement, getRightPlacement, getTopPlacement } from "./placements";

import {
  CalculatedPosition,
  GetPositionConfig,
  Position,
  PrimaryPlacement,
  SecondaryPlacement,
} from "./getPosition-types";

import {
  invalidTopPlacement,
  validateBottomPlacement,
  validateLeftPlacement,
  validateRightPlacement,
} from "./validators";

const defaultConfig: GetPositionConfig = {
  autoPosition: true,
  consumerHasParentWidth: false,
  secondaryPlacement: SecondaryPlacement.START,
  primaryPlacement: PrimaryPlacement.BOTTOM,
  margin: 8,
  browserDeadZone: 8,
};

export function getPosition(
  targetElement: Element | SVGElement,
  consumerElement: Element,
  externalConfig?: Partial<GetPositionConfig>
): Position;

export function getPosition(
  targetElement: Element | SVGElement | null | undefined,
  consumerElement: Element | null | undefined,
  externalConfig?: Partial<GetPositionConfig>
): Position | undefined;

export function getPosition(
  targetElement: Element | SVGElement | null | undefined,
  consumerElement: Element | null | undefined,
  externalConfig?: Partial<GetPositionConfig>
): Position | undefined {
  let position: Position | undefined = undefined;

  if (!targetElement || !consumerElement) {
    return position;
  }

  const {
    autoPosition,
    primaryPlacement,
    margin,
    browserDeadZone,
    consumerHasParentWidth,
    secondaryPlacement,
  }: GetPositionConfig = {
    ...defaultConfig,
    ...externalConfig,
    browserDeadZone: externalConfig?.browserDeadZone
      ? externalConfig.browserDeadZone
      : externalConfig?.margin || defaultConfig.browserDeadZone,
  };

  const targetRect = targetElement.getBoundingClientRect();
  const consumerRect = consumerElement.getBoundingClientRect();

  switch (primaryPlacement) {
    case PrimaryPlacement.TOP: {
      position = getTopPlacement(targetRect, consumerRect, margin, secondaryPlacement, false);

      if (autoPosition && invalidTopPlacement(position, browserDeadZone)) {
        position = getBottomPlacement(targetRect, consumerRect, margin, secondaryPlacement, true);

        if (validateBottomPlacement(position, consumerRect, browserDeadZone)) {
          position = {
            top: browserDeadZone + window.scrollY,
            left: position.left,
            calculatedPosition: CalculatedPosition.FIT_TOP,
          };
        }
      }

      break;
    }

    case PrimaryPlacement.BOTTOM: {
      position = getBottomPlacement(targetRect, consumerRect, margin, secondaryPlacement, false);

      if (autoPosition && validateBottomPlacement(position, consumerRect, browserDeadZone)) {
        position = getTopPlacement(targetRect, consumerRect, margin, secondaryPlacement, true);

        if (invalidTopPlacement(position, browserDeadZone)) {
          position = {
            top: window.scrollY + window.innerHeight - consumerRect.height - browserDeadZone,
            left: position.left,
            calculatedPosition: CalculatedPosition.FIT_BOTTOM,
          };
        }
      }

      break;
    }

    case PrimaryPlacement.RIGHT: {
      position = getRightPlacement(targetRect, consumerRect, margin, secondaryPlacement, false);

      if (autoPosition && validateRightPlacement(position, consumerRect, browserDeadZone)) {
        position = getLeftPlacement(targetRect, consumerRect, margin, secondaryPlacement, true);

        if (validateLeftPlacement(position, browserDeadZone)) {
          position = {
            top: position.top,
            left: browserDeadZone + window.scrollX,
            calculatedPosition: CalculatedPosition.FIT_RIGHT,
          };
        }
      }

      break;
    }

    case PrimaryPlacement.LEFT: {
      position = getLeftPlacement(targetRect, consumerRect, margin, secondaryPlacement, false);

      if (autoPosition && validateLeftPlacement(position, browserDeadZone)) {
        position = getRightPlacement(targetRect, consumerRect, margin, secondaryPlacement, true);

        if (validateRightPlacement(position, consumerRect, browserDeadZone)) {
          position = {
            top: position.top,
            left: browserDeadZone + window.scrollX,
            calculatedPosition: CalculatedPosition.FIT_LEFT,
          };
        }
      }

      break;
    }
  }

  if (!position) {
    return undefined;
  }

  if (!consumerHasParentWidth) {
    return position;
  }

  return { ...position, width: targetRect.width };
}
