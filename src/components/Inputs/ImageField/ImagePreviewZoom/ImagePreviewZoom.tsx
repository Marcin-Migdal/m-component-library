import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

import { Overlay } from "../../../Miscellaneous";

import "./ImagePreviewZoom.scss";

type ImagePreviewZoomProps = {
  zoomVisible: boolean;
  value: File | undefined;
  closeZoom: () => void;
};

export const ImagePreviewZoom = ({ zoomVisible, value, closeZoom }: ImagePreviewZoomProps) => {
  if (!zoomVisible || !value) {
    return null;
  }

  return (
    <Overlay onClick={closeZoom}>
      <div className="m-zoom-image-preview-container">
        <FontAwesomeIcon onClick={closeZoom} icon="x" className={classNames("m-image-icon", "m-image-close-zooms")} />
        <img src={URL.createObjectURL(value)} className="m-zoom-image-preview" />
      </div>
    </Overlay>
  );
};
