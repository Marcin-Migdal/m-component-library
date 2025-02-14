import { CSSProperties } from "react";

import { getCssPropertyAsNumber } from "../../../../../utils";
import { LabelPercentageWidth, SimpleInputLabel } from "../../../../global-types";

export const getSimpleInputsErrorStyle = (
  labelType: `${SimpleInputLabel}`,
  labelWidth: LabelPercentageWidth
): CSSProperties => {
  const errorIconMargin = getCssPropertyAsNumber(document.body, "--error-icon-margin", 8);

  if (labelType === SimpleInputLabel.LEFT) {
    return { right: `${errorIconMargin}px` };
  }

  return { right: `calc(${labelWidth}% + ${errorIconMargin}px)` };
};
