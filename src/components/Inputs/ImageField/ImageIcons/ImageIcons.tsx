import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

import { InputErrorType } from "../../_inputsComponents";

import "./ImageIcons.scss";

type ImageIconsProps = {
  openZoom: () => void;
  clearImage: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  value: File | null;
  src?: string;
  error: InputErrorType | undefined;
  disabled: boolean;
};

export const ImageIcons = ({ openZoom, clearImage, value, src, error, disabled }: ImageIconsProps) => {
  if (!src && !!error) {
    return null;
  }

  return (
    <div className="icons-container">
      {(!!src || !!value) && (
        <FontAwesomeIcon
          onClick={openZoom}
          icon="magnifying-glass"
          className={classNames("m-image-icon", "m-image-zoom")}
        />
      )}
      {!disabled && !!value && (
        <FontAwesomeIcon onClick={clearImage} icon="x" className={classNames("m-image-icon", "m-image-delete")} />
      )}
    </div>
  );
};
