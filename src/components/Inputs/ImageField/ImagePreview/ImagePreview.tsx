import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { InputErrorType } from "../../_inputsComponents";

import "./ImagePreview.scss";

type ImagePreviewProps = {
  value: File | undefined;
  error: InputErrorType | undefined;
};

export const ImagePreview = ({ value, error }: ImagePreviewProps) => {
  if (value && !error) {
    return <img src={URL.createObjectURL(value)} className="m-image-preview" />;
  }

  return (
    <div className="m-image-placeholder-container">
      <div className="m-image-placeholder-border" />
      <FontAwesomeIcon icon="image" className="m-image-placeholder" />
    </div>
  );
};
