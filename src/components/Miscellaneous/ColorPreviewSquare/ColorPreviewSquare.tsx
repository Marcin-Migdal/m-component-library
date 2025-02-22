import React, { CSSProperties } from "react";

import { HslValue, rgbToHex, RgbValue, valueToRgb } from "../../Inputs";
import { ColorPreviewSquareProps } from "./types";

import "./ColorPreviewSquare.scss";

/**
 * ColorPreviewSquare component for displaying a color preview square.
 * Supports click event handler.
 */
const ColorPreviewSquare = ({ onClick, disabled, color }: ColorPreviewSquareProps) => {
  const getBackgroundColorCssProperty = (
    backgroundColor: RgbValue | HslValue | CSSProperties["backgroundColor"] | undefined
  ) => {
    if (backgroundColor === undefined) {
      return undefined;
    }

    if (typeof backgroundColor === "string") {
      return backgroundColor;
    }

    const rgb = valueToRgb(backgroundColor);

    return rgbToHex(rgb.r, rgb.g, rgb.b);
  };

  return (
    <div
      className="m-color-preview-square"
      style={{ backgroundColor: getBackgroundColorCssProperty(color) }}
      onClick={() => onClick && !disabled && onClick()}
    />
  );
};

export default ColorPreviewSquare;
