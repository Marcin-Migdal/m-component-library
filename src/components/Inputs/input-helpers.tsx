import { CSSProperties } from "react";

import { getCssProperty } from "../../helpers";
import * as GlobalInterfaces from "../global-interfaces";

export const getInputsErrorStyle = (
    labelType: GlobalInterfaces.InputLabelType,
    labelWidth: GlobalInterfaces.LabelPercentageWidth,
    floatingInputWidth: GlobalInterfaces.FloatingInputWidth
): CSSProperties => {
    const errorIconSize = parseInt(getCssProperty(document.body, "--error-icon-size", "16px"));
    const errorIconMargin = parseInt(getCssProperty(document.body, "--error-icon-margin", "8px"));

    return labelType === "left"
        ? { right: `${errorIconMargin}px` }
        : labelType === "right"
        ? { right: `calc(${labelWidth}% + ${errorIconMargin}px)` }
        : { left: `calc(${floatingInputWidth}% - ${errorIconSize}px - ${errorIconMargin}px)` };
};

export const getCheckboxErrorStyle = (
    checkboxContainerElement: HTMLDivElement,
    labelType: GlobalInterfaces.InputLabelType,
    labelWidth: GlobalInterfaces.LabelPercentageWidth
): CSSProperties => {
    const checkboxWidth = parseInt(getCssProperty(checkboxContainerElement, "--checkbox-input-size") || "20px");
    const errorIconMargin = parseInt(getCssProperty(document.body, "--error-icon-margin") || "8px");
    const checkboxBorderLineWidth = parseInt(getCssProperty(document.body, "--border-width") || "2px");

    const additionalDistance: string = `${checkboxWidth + errorIconMargin + 2 * checkboxBorderLineWidth}px`;

    return { left: labelType === "left" ? `calc(${labelWidth}% + ${additionalDistance})` : additionalDistance };
};

export function getInputStyle<T extends GlobalInterfaces.SimpleInputLabelType | GlobalInterfaces.InputLabelType>(
    labelType: T,
    label: string | undefined,
    labelWidth: GlobalInterfaces.LabelPercentageWidth,
    floatingInputWidth: T extends GlobalInterfaces.SimpleInputLabelType ? undefined : GlobalInterfaces.FloatingInputWidth
): Pick<CSSProperties, "marginLeft" | "width"> {
    return {
        marginLeft: labelType === "left" && label ? `${labelWidth}%` : "unset",
        width: labelType === "floating" ? `${floatingInputWidth}%` : label ? `${100 - labelWidth}%` : "100%",
    };
}
