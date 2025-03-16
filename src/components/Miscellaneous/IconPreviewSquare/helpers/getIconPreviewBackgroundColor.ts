import { CSSProperties } from "react";
import { RgbValue } from "../../../Inputs";

export const getIconPreviewBackgroundColor = (rgbColor: RgbValue): CSSProperties["backgroundColor"] => {
  return `rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b}, 0.25)`;
};
