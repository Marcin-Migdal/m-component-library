import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

import { RequirementsDescription } from "./RequirementsDescription/RequirementsDescription";

import "./imageDropzone.css";

type ImageDropzoneProps = {
  dropzoneMessage: [string, string];
  mappedAcceptFormats: string[];
  validationDescription: string[];
  className: string;
};

export const ImageDropzone = ({
  dropzoneMessage,
  mappedAcceptFormats,
  validationDescription,
  className,
}: ImageDropzoneProps) => {
  return (
    <div className={classNames("m-input", "m-image-dropzone", className)}>
      <FontAwesomeIcon icon="cloud-arrow-up" className={classNames("m-image-dropzone-icon")} />
      <p className="m-image-dropzone-message">
        <span className={classNames("m-bold-message-main", "m-underline-message-main")}>{dropzoneMessage[0]}</span>
        <span>{dropzoneMessage[1]}</span>
      </p>
      <p className="m-image-dropzone-message">
        <span>{mappedAcceptFormats}</span>
        {validationDescription.length === 1 && <span>{`(${validationDescription[0]})`}</span>}
        {validationDescription.length > 1 && <RequirementsDescription validationDescription={validationDescription} />}
      </p>
    </div>
  );
};
