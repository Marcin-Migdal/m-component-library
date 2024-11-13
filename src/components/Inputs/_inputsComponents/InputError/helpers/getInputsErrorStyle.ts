import { CSSProperties } from "react";

import { getCssProperty } from "../../../../../helpers";
import { FloatingInputWidth, InputLabel, LabelPercentageWidth } from "../../../../global-types";

export const getInputsErrorStyle = (
  labelType: InputLabel,
  labelWidth: LabelPercentageWidth,
  floatingInputWidth: FloatingInputWidth
): CSSProperties => {
  const errorIconSize = parseInt(getCssProperty(document.body, "--error-icon-size", "16px"));
  const errorIconMargin = parseInt(getCssProperty(document.body, "--error-icon-margin", "8px"));

  if (labelType === InputLabel.LEFT) {
    return { right: `${errorIconMargin}px` };
  } else if (labelType === InputLabel.RIGHT) {
    return { right: `calc(${labelWidth}% + ${errorIconMargin}px)` };
  }

  return { left: `calc(${floatingInputWidth}% - ${errorIconSize}px - ${errorIconMargin}px)` };
};
