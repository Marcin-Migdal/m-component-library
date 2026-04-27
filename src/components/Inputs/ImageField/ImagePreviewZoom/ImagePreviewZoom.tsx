import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

import { Overlay, OverlayProps } from "../../../Miscellaneous";

import "./ImagePreviewZoom.scss";

type ImagePreviewZoomProps = {
  zoomVisible: boolean;
  value: File | null;
  src?: string;
  closeZoom: () => void;
  overlayConfig?: OverlayProps;
};

export const ImagePreviewZoom = ({ zoomVisible, value, src, closeZoom, overlayConfig }: ImagePreviewZoomProps) => {
  if (!zoomVisible || (!value && !src)) {
    return null;
  }

  const imageSrc = value ? URL.createObjectURL(value) : src;

  return (
    <Overlay {...overlayConfig} onClick={closeZoom} onClose={closeZoom}>
      <div className="m-zoom-image-preview-container">
        <FontAwesomeIcon onClick={closeZoom} icon="x" className={classNames("m-image-icon", "m-image-close-zooms")} />
        <img src={imageSrc} className="m-zoom-image-preview" />
      </div>
    </Overlay>
  );
};
