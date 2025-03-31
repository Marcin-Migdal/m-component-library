import { CSSProperties } from "react";

import { getCssPropertyAsNumber } from "../../../../../utils";
import { InputLabel, Percentage } from "../../../../global-types";

export const getInputsErrorStyle = (
  labelType: `${InputLabel}`,
  labelWidth: Percentage,
  floatingInputWidth: Percentage
): CSSProperties => {
  const errorIconSize = getCssPropertyAsNumber(document.body, "--error-icon-size", 16);
  const errorIconMargin = getCssPropertyAsNumber(document.body, "--error-icon-margin", 8);

  if (labelType === InputLabel.LEFT) {
    return { right: `${errorIconMargin}px` };
  } else if (labelType === InputLabel.RIGHT) {
    return { right: `calc(${labelWidth}% + ${errorIconMargin}px)` };
  }

  return { left: `calc(${floatingInputWidth}% - ${errorIconSize}px - ${errorIconMargin}px)` };
};
