import { CSSProperties } from "react";

import { getCssProperty, getCssPropertyAsNumber } from "../../../../../helpers";
import { LabelPercentageWidth, SimpleInputLabel } from "../../../../global-types";

export const getToggleSwitchErrorStyle = (
  toggleSwitchContainerElement: HTMLDivElement,
  labelType: SimpleInputLabel,
  labelWidth: LabelPercentageWidth
): CSSProperties => {
  const toggleSwitchSizeCalcProperty: string | undefined = getCssProperty(
    toggleSwitchContainerElement,
    "--toggle-switch-input-size"
  );

  const numbers = toggleSwitchSizeCalcProperty?.match(/\d+/g);
  let toggleSwitchWidth: number = 20;

  if (numbers) {
    if (numbers.length === 2) {
      const num1 = parseInt(numbers[0], 10);
      const num2 = parseInt(numbers[1], 10);

      toggleSwitchWidth = num1 - num2;
    } else if (numbers.length === 1) {
      toggleSwitchWidth = parseInt(numbers[0], 10);
    }
  }

  toggleSwitchWidth = toggleSwitchWidth * 2;

  const errorIconMargin = parseInt(getCssProperty(document.body, "--error-icon-margin") || "8px");
  const checkboxBorderLineWidth = getCssPropertyAsNumber(document.body, "--border-width", 2);

  const additionalDistance: string = `${toggleSwitchWidth + errorIconMargin + 2 * checkboxBorderLineWidth}px`;

  return {
    left: labelType === SimpleInputLabel.LEFT ? `calc(${labelWidth}% + ${additionalDistance})` : additionalDistance,
  };
};
