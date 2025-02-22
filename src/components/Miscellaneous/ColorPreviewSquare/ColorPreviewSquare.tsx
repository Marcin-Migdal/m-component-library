import React from "react";

import { ColorPreviewSquareProps } from "./types";

import "./ColorPreviewSquare.scss";

/**
 * ColorPreviewSquare component for displaying a color preview square.
 * Supports click event handler.
 */
const ColorPreviewSquare = ({ onClick, disabled, color }: ColorPreviewSquareProps) => {
  return (
    <div
      className="m-color-preview-square"
      style={{ backgroundColor: color }}
      onClick={() => onClick && !disabled && onClick()}
    />
  );
};

export default ColorPreviewSquare;
