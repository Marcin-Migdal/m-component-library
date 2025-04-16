import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

import { Overlay, OverlayProps } from "../../../Miscellaneous";

import "./ImagePreviewZoom.scss";

type ImagePreviewZoomProps = {
  zoomVisible: boolean;
  value: File | null;
  closeZoom: () => void;
  overlayConfig?: OverlayProps;
};

export const ImagePreviewZoom = ({ zoomVisible, value, closeZoom, overlayConfig }: ImagePreviewZoomProps) => {
  if (!zoomVisible || !value) {
    return null;
  }

  return (
    <Overlay {...overlayConfig} onClick={closeZoom} onClose={closeZoom}>
      <div className="m-zoom-image-preview-container">
        <FontAwesomeIcon onClick={closeZoom} icon="x" className={classNames("m-image-icon", "m-image-close-zooms")} />
        <img src={URL.createObjectURL(value)} className="m-zoom-image-preview" />
      </div>
    </Overlay>
  );
};
