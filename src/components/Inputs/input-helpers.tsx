import { CSSProperties } from "react";

import { getCssVariable } from "../../helpers/css-helprs";
import * as GlobalInterfaces from "../global-interfaces";
import { InputLabelType } from "../global-interfaces";
import { CheckboxLabelType } from "./Checkbox/checkbox-interfaces";

export const getInputsErrorStyle = (
    labelType: GlobalInterfaces.InputLabelType,
    labelWidth: GlobalInterfaces.LabelPercentageWidth,
    floatingInputWidth: GlobalInterfaces.FloatingInputWidth
): CSSProperties => {
    const errorIconSize = parseInt(getCssVariable(document.body, "--error-icon-size", "16px"));
    const errorIconMargin = parseInt(getCssVariable(document.body, "--error-icon-margin", "8px"));

    return labelType === "left"
        ? { right: `${errorIconMargin}px` }
        : labelType === "right"
        ? { right: `calc(${labelWidth}% + ${errorIconMargin}px)` }
        : { left: `calc(${floatingInputWidth}% - ${errorIconSize}px - ${errorIconMargin}px)` };
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

export function getInputStyle<T extends CheckboxLabelType | InputLabelType>(
    labelType: T,
    label: string | undefined,
    labelWidth: GlobalInterfaces.LabelPercentageWidth,
    floatingInputWidth: T extends CheckboxLabelType ? undefined : GlobalInterfaces.FloatingInputWidth
): Pick<CSSProperties, "marginLeft" | "width"> {
    return {
        marginLeft: labelType === "left" && label ? `${labelWidth}%` : "unset",
        width: labelType === "floating" ? `${floatingInputWidth}%` : label ? `${100 - labelWidth}%` : "100%",
    };
}
