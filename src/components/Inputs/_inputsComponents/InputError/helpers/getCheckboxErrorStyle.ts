import { CSSProperties } from "react";

import { getCssProperty, getCssPropertyAsNumber } from "../../../../../utils";
import { InputLabel, Percentage } from "../../../../global-types";

export const getCheckboxErrorStyle = (
  checkboxContainerElement: HTMLDivElement,
  labelType: `${InputLabel}`,
  labelWidth: Percentage
): CSSProperties => {
  const checkboxSizeCalcProperty: string | undefined = getCssProperty(
    checkboxContainerElement,
    "--checkbox-input-size"
  );

  const numbers = checkboxSizeCalcProperty?.match(/\d+/g);
  let checkboxWidth: number = 20;

  if (numbers) {
    if (numbers.length === 2) {
      const num1 = parseInt(numbers[0], 10);
      const num2 = parseInt(numbers[1], 10);

      checkboxWidth = num1 - num2;
    } else if (numbers.length === 1) {
      checkboxWidth = parseInt(numbers[0], 10);
    }
  }

  const errorIconMargin = getCssPropertyAsNumber(document.body, "--error-icon-margin", 8);
  const checkboxBorderLineWidth = getCssPropertyAsNumber(document.body, "--border-base", 2);

  const additionalDistance: string = `${checkboxWidth + errorIconMargin + 2 * checkboxBorderLineWidth}px`;

  return {
    left: labelType === InputLabel.LEFT ? `calc(${labelWidth}% + ${additionalDistance})` : additionalDistance,
  };
};
