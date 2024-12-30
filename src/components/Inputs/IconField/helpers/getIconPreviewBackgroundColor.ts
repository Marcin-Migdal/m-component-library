import { CSSProperties } from "react";
import { RgbValue } from "../../ColorPicker";

export const getIconPreviewBackgroundColor = (rgbColor: RgbValue): CSSProperties["backgroundColor"] => {
  return `rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b}, 0.25)`;
};
