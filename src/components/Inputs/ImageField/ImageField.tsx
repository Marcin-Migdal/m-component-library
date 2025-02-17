import classNames from "classnames";
import React, { ChangeEvent, useRef, useState } from "react";
import { v4 as uuId } from "uuid";

import { SimpleInputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getSimpleInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getSimpleInputsErrorStyle";
import { defaultInputPropsValue } from "../_inputUtils/defaultInputPropsValue";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { getAcceptanceDescription } from "./helpers/getAcceptanceDescription";
import { getValidationDescription } from "./helpers/getValidationDescription";
import { isImageValid } from "./helpers/isImageValid";
import { ImageDropzone } from "./ImageDropzone/ImageDropzone";
import { ImageIcons } from "./ImageIcons/ImageIcons";
import { ImagePreview } from "./ImagePreview/ImagePreview";
import { ImagePreviewZoom } from "./ImagePreviewZoom/ImagePreviewZoom";
import { ImageFieldProps } from "./types";

import "./ImageField.scss";

export const ImageField = ({
  value: externalValue = undefined,
  onChange,
  onError,
  onClear,
  name,
  label,
  error,
  classNamesObj,

  dropzoneMessage = ["Click to upload", " or drag and drop"],
  accept = [".jpg", ".svg", ".png"],
  maxSize,
  minSize,
  maxResolution,
  minResolution,

  labelType = defaultInputPropsValue.labelType as SimpleInputLabel,
  labelWidth = defaultInputPropsValue.labelWidth,
  size = defaultInputPropsValue.size,
  disabled = defaultInputPropsValue.disabled,
  readOnly = defaultInputPropsValue.readOnly,
  disableDefaultMargin = defaultInputPropsValue.disableDefaultMargin,

  ...otherProps
}: ImageFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [imageFieldId] = useState(uuId());
  const [internalValue, setInternalValue] = useState<File | undefined>(undefined);
  const [zoomVisible, setZoomVisible] = useState<boolean>(false);

  const isControlled = externalValue !== undefined;
  const value: File | undefined = isControlled ? externalValue : internalValue;

  const handleDrop = async (event: React.DragEvent<HTMLLabelElement>) => {
    event.stopPropagation();
    event.preventDefault();

    const imageFile = event.dataTransfer.files[0];

    const isValid = await isImageValid(imageFile, onError, maxSize, minSize, maxResolution, minResolution);

    if (!isValid) {
      inputRef.current && (inputRef.current.value = "");
      return;
    }

    onChange &&
      onChange(
        {
          ...event,
          target: {
            ...event.target,
            value: imageFile,
            source: "drop",
          },
        },
        imageFile
      );
    !isControlled && setInternalValue(imageFile);
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];

    if (!imageFile) {
      return;
    }

    const isValid = await isImageValid(imageFile, onError, maxSize, minSize, maxResolution, minResolution);

    if (!isValid) {
      inputRef.current && (inputRef.current.value = "");
      return;
    }

    onChange &&
      onChange(
        {
          ...event,
          target: {
            ...event.target,
            value: imageFile,
            source: "change",
          },
        },
        imageFile
      );

    !isControlled && setInternalValue(imageFile);
  };

  const clearImage = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();

    inputRef.current && (inputRef.current.value = "");

    onChange &&
      onChange(
        {
          ...event,
          target: {
            ...event.target,
            value: undefined,
            source: "clear",
          },
        },
        undefined
      );

    onClear && onClear();

    !isControlled && setInternalValue(undefined);
  };

  const stopPropagationAndPreventDefault = (event: React.DragEvent<HTMLLabelElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const openZoom = () => {
    setZoomVisible(true);
  };

  const closeZoom = () => {
    setZoomVisible(false);
  };

  const mappedAcceptFormats = getAcceptanceDescription(accept);
  const validationDescription = getValidationDescription(maxSize, minSize, maxResolution, minResolution);

  return (
    <>
      <ImagePreviewZoom zoomVisible={zoomVisible} value={value} closeZoom={closeZoom} />
      <InputContainer
        disabled={disabled}
        className={classNames("m-image-container", classNamesObj?.container)}
        size={size}
        error={error}
        disableDefaultMargin={disableDefaultMargin}
      >
        <div style={getInputStyle(labelType as SimpleInputLabel, label, labelWidth, undefined)}>
          <ImageIcons openZoom={openZoom} clearImage={clearImage} disabled={disabled} value={value} error={error} />
          <label
            onDrop={handleDrop}
            onDragOver={stopPropagationAndPreventDefault}
            onDragLeave={stopPropagationAndPreventDefault}
            className={classNames("m-image-input-wrapper", classNamesObj?.inputWrapper)}
          >
            <input
              ref={inputRef}
              id={imageFieldId}
              className="m-image-input"
              type="file"
              onChange={handleChange}
              name={name}
              disabled={disabled || readOnly}
              accept={accept.join(", ")}
              {...otherProps}
            />
            <ImagePreview value={value} error={error} />
            <ImageDropzone
              dropzoneMessage={dropzoneMessage}
              mappedAcceptFormats={mappedAcceptFormats}
              validationDescription={validationDescription}
              className={classNames(classNamesObj?.dropzone, labelType)}
            />
          </label>
        </div>
        {label && (
          <InputsLabel
            htmlFor={imageFieldId}
            label={label}
            labelType={labelType}
            className={classNames("m-image-label", classNamesObj?.label)}
            labelWidth={labelWidth}
            isFilled={!!value}
          />
        )}
        {error && (
          <InputError
            style={getSimpleInputsErrorStyle(labelType, labelWidth)}
            className={classNames("image-error", classNamesObj?.error)}
            error={error}
          />
        )}
      </InputContainer>
    </>
  );
};
