import { CSSProperties } from "react";

import { getCssProperty } from "../../../helpers";
import * as GlobalInterfaces from "../../global-types";

export const getCheckboxErrorStyle = (
    checkboxContainerElement: HTMLDivElement,
    labelType: GlobalInterfaces.SimpleInputLabel,
    labelWidth: GlobalInterfaces.LabelPercentageWidth
): CSSProperties => {
    const checkboxSizeCalcProperty: string | undefined = getCssProperty(checkboxContainerElement, "--checkbox-input-size");

    const numbers = checkboxSizeCalcProperty?.match(/\d+/g);
    let checkboxWidth = 20;

    if (numbers && numbers.length === 2) {
        const num1 = parseInt(numbers[0], 10);
        const num2 = parseInt(numbers[1], 10);

        checkboxWidth = num1 - num2;
    }

    const errorIconMargin = parseInt(getCssProperty(document.body, "--error-icon-margin") || "8px");
    const checkboxBorderLineWidth = parseInt(getCssProperty(document.body, "--border-width") || "2px");

    const additionalDistance: string = `${checkboxWidth + errorIconMargin + 2 * checkboxBorderLineWidth}px`;

    return {
        left: labelType === GlobalInterfaces.SimpleInputLabel.LEFT ? `calc(${labelWidth}% + ${additionalDistance})` : additionalDistance,
    };
};
