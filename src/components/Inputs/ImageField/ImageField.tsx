import classNames from "classnames";
import React, { useRef, useState } from "react";
import { v4 as uuId } from "uuid";

import { InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { defaultInputPropsValue } from "../_inputUtils/defaultInputPropsValue";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { getAcceptanceDescription } from "./helpers/getAcceptanceDescription";
import { getValidationDescription } from "./helpers/getValidationDescription";
import { isImageValid } from "./helpers/isImageValid";
import { ImageDropzone } from "./ImageDropzone/ImageDropzone";
import { ImageIcons } from "./ImageIcons/ImageIcons";
import { ImagePreview } from "./ImagePreview/ImagePreview";
import { ImagePreviewZoom } from "./ImagePreviewZoom/ImagePreviewZoom";
import { ImageFieldChangeEvent, ImageFieldProps } from "./types";

import "./ImageField.scss";

export const ImageField = ({
  value: externalValue = undefined,
  onChange,
  onBlur,
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

  labelType = defaultInputPropsValue.labelType,
  labelWidth = defaultInputPropsValue.labelWidth,
  size = defaultInputPropsValue.size,
  disabled = defaultInputPropsValue.disabled,
  readOnly = defaultInputPropsValue.readOnly,
  marginBottomType = defaultInputPropsValue.marginBottomType,
  floatingInputWidth = defaultInputPropsValue.floatingInputWidth,

  ...otherProps
}: ImageFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [imageFieldId] = useState(uuId());
  const [internalValue, setInternalValue] = useState<File | null>(null);
  const [zoomVisible, setZoomVisible] = useState<boolean>(false);

  const isControlled = externalValue !== undefined;
  const value: File | null = isControlled ? externalValue : internalValue;

  const handleDrop = async (event: React.DragEvent<HTMLLabelElement>) => {
    event.stopPropagation();
    event.preventDefault();

    const imageFile = event.dataTransfer.files[0];

    const isValid = await isImageValid(imageFile, onError, maxSize, minSize, maxResolution, minResolution);

    if (!isValid) {
      inputRef.current && (inputRef.current.value = "");
      return;
    }

    !isControlled && setInternalValue(imageFile);

    const imageFIeldEvent: ImageFieldChangeEvent = {
      ...event,
      target: {
        ...event.target,
        name: name || "",
        value: imageFile,
        type: "image",
        checked: false,
      },
    };

    onChange && onChange(imageFIeldEvent, imageFile);
    onBlur && onBlur(imageFIeldEvent, imageFile);
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];

    if (!imageFile) {
      return;
    }

    const isValid = await isImageValid(imageFile, onError, maxSize, minSize, maxResolution, minResolution);

    if (!isValid) {
      inputRef.current && (inputRef.current.value = "");
      return;
    }

    !isControlled && setInternalValue(imageFile);

    const imageFIeldEvent: ImageFieldChangeEvent = {
      ...event,
      target: {
        ...event.target,
        name: name || "",
        value: imageFile,
        type: "image",
        checked: false,
      },
    };

    onChange && onChange(imageFIeldEvent, imageFile);
    onBlur && onBlur(imageFIeldEvent, imageFile);
  };

  const clearImage = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();
    inputRef.current && (inputRef.current.value = "");

    !isControlled && setInternalValue(null);

    onClear &&
      onClear(
        {
          ...event,
          target: {
            ...event.target,
            name: name || "",
            value: null,
            type: "image",
            checked: false,
          },
        },
        null
      );
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
        marginBottomType={marginBottomType}
        labelType={labelType}
      >
        <div style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}>
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
            forceFloating={labelType === InputLabel.FLOATING}
          />
        )}
        {error && (
          <InputError
            style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)}
            className={classNames("image-error", classNamesObj?.error)}
            error={error}
          />
        )}
      </InputContainer>
    </>
  );
};
