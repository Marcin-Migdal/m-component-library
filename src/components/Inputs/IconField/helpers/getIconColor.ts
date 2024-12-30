import { CSSProperties } from "react";
import { RgbValue } from "../../ColorPicker";

export const getIconColor = (rgbColor: RgbValue): CSSProperties["color"] => {
  return `rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b})`;
};
