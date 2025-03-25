import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { valueToRgb } from "../../Inputs/ColorPicker";
import { getIconColor } from "./helpers/getIconColor";
import { getIconPreviewBackgroundColor } from "./helpers/getIconPreviewBackgroundColor";
import { IconPreviewSquareProps } from "./types";

import "./IconPreviewSquare.scss";

const IconPreviewSquare = ({
  children,
  icon,
  color,
  className,
  style,
  onClick,
  disabled = false,
}: PropsWithChildren<IconPreviewSquareProps>) => {
  const rgbColor = color ? valueToRgb(color) : undefined;

  return (
    <div
      className={classNames("m-icon-preview-square", className, {
        clickable: onClick && !disabled,
      })}
      style={{
        backgroundColor: rgbColor ? getIconPreviewBackgroundColor(rgbColor) : "var(--input-background-color)",
        ...style,
      }}
    >
      {icon && (
        <div>
          <FontAwesomeIcon
            icon={icon as IconName}
            className="m-icon-preview"
            style={{
              color: rgbColor ? getIconColor(rgbColor) : "var(--input-color)",
            }}
          />
          {children}
        </div>
      )}
    </div>
  );
};

export default IconPreviewSquare;
