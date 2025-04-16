import classNames from "classnames";
import React, { CSSProperties } from "react";

import { rgbToHex, valueToRgb } from "../../Inputs/ColorPicker/helpers";
import { HslValue, RgbValue } from "../../Inputs/ColorPicker/types";
import { ColorPreviewSquareProps } from "./types";

import "./ColorPreviewSquare.scss";

/**
 * ColorPreviewSquare component for displaying a color preview square.
 * Supports click event handler.
 */
const ColorPreviewSquare = ({ onClick, disabled = false, color, className, style }: ColorPreviewSquareProps) => {
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

    return rgbToHex(rgb);
  };

  return (
    <div
      className={classNames("m-color-preview-square", className, {
        clickable: onClick && !disabled,
      })}
      style={{
        backgroundColor: getBackgroundColorCssProperty(color),
        ...style,
      }}
      onClick={() => onClick && !disabled && onClick()}
    />
  );
};

export default ColorPreviewSquare;
