import { CSSProperties } from "react";

import { getCssProperty } from "../../../helpers";
import { FloatingInputWidth, InputLabel, LabelPercentageWidth } from "../../global-types";

export const getInputsErrorStyle = (
    labelType: InputLabel,
    labelWidth: LabelPercentageWidth,
    floatingInputWidth: FloatingInputWidth
): CSSProperties => {
    const errorIconSize = parseInt(getCssProperty(document.body, "--error-icon-size", "16px"));
    const errorIconMargin = parseInt(getCssProperty(document.body, "--error-icon-margin", "8px"));

    return labelType === InputLabel.LEFT
        ? { right: `${errorIconMargin}px` }
        : labelType === InputLabel.RIGHT
        ? { right: `calc(${labelWidth}% + ${errorIconMargin}px)` }
        : { left: `calc(${floatingInputWidth}% - ${errorIconSize}px - ${errorIconMargin}px)` };
};
