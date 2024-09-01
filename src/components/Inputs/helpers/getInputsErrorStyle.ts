import { CSSProperties } from "react";

import { getCssProperty } from "../../../helpers";
import * as GlobalInterfaces from "../../global-types";

export const getInputsErrorStyle = (
    labelType: GlobalInterfaces.InputLabel,
    labelWidth: GlobalInterfaces.LabelPercentageWidth,
    floatingInputWidth: GlobalInterfaces.FloatingInputWidth
): CSSProperties => {
    const errorIconSize = parseInt(getCssProperty(document.body, "--error-icon-size", "16px"));
    const errorIconMargin = parseInt(getCssProperty(document.body, "--error-icon-margin", "8px"));

    return labelType === GlobalInterfaces.InputLabel.LEFT
        ? { right: `${errorIconMargin}px` }
        : labelType === GlobalInterfaces.InputLabel.RIGHT
        ? { right: `calc(${labelWidth}% + ${errorIconMargin}px)` }
        : { left: `calc(${floatingInputWidth}% - ${errorIconSize}px - ${errorIconMargin}px)` };
};
