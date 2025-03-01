import { CSSProperties } from "react";
import { FloatingInputWidth, InputLabel, LabelPercentageWidth } from "../../global-types";

export function getInputStyle(
  labelType: `${InputLabel}`,
  label: string | undefined,
  labelWidth: LabelPercentageWidth,
  floatingInputWidth: FloatingInputWidth
): Pick<CSSProperties, "marginLeft" | "width"> {
  const getMarginLeft = () => {
    if (labelType === InputLabel.LEFT && label) {
      return `${labelWidth}%`;
    }

    return "unset";
  };

  const getWidth = (): CSSProperties["width"] => {
    if (labelType === InputLabel.FLOATING) {
      return `${floatingInputWidth}%`;
    } else if (label) {
      return `${100 - labelWidth}%`;
    }

    return "100%";
  };

  return {
    marginLeft: getMarginLeft(),
    width: getWidth(),
  };
}
