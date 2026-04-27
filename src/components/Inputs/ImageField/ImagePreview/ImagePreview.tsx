import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { InputErrorType } from "../../_inputsComponents";

import "./ImagePreview.scss";

type ImagePreviewProps = {
  value: File | null;
  src?: string;
  error: InputErrorType | undefined;
};

export const ImagePreview = ({ value, src, error }: ImagePreviewProps) => {
  const imagePreviewSrc = value ? URL.createObjectURL(value) : src;

  if (imagePreviewSrc && !error) {
    return <img src={imagePreviewSrc} className="m-image-preview" />;
  }

  return (
    <div className="m-image-placeholder-container">
      <div className="m-image-placeholder-border" />
      <FontAwesomeIcon icon="image" className="m-image-placeholder" />
    </div>
  );
};
