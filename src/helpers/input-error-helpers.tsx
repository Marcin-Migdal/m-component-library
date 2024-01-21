import { CSSProperties } from "react";

import * as GlobalInterfaces from "../components/global-interfaces";
import { getCssVariable } from "./css-helprs";

export const getInputsErrorStyle = (
    labelType: GlobalInterfaces.InputLabelType,
    labelWidth: GlobalInterfaces.LabelPercentageWidth,
    floatingInputWidth: GlobalInterfaces.FloatingInputWidth
): CSSProperties => {
    const errorIconSize = parseInt(getCssVariable(document.body, "--error-icon-size", "16px"));
    const errorIconMargin = parseInt(getCssVariable(document.body, "--error-icon-margin", "8px"));

    return labelType === "left"
        ? { right: 0 }
        : labelType === "right"
        ? { right: `calc(${labelWidth}%)` }
        : { left: `calc(${floatingInputWidth}%` };
};

export const getCheckboxErrorStyle = (
    labelType: GlobalInterfaces.InputLabelType,
    labelWidth: GlobalInterfaces.LabelPercentageWidth
): CSSProperties => {
    const checkboxWidth = parseInt(getCssVariable(document.body, "--checkbox-input-size") || "20px");
    const errorIconMargin = parseInt(getCssVariable(document.body, "--error-icon-margin") || "8px");
    const checkboxBorderLineWidth = parseInt(getCssVariable(document.body, "--border-width") || "2px");

    const additionalDistance: string = `${checkboxWidth + errorIconMargin + 2 * checkboxBorderLineWidth}px`;

    return { left: labelType === "left" ? `calc(${labelWidth}% + ${additionalDistance})` : additionalDistance };
};
