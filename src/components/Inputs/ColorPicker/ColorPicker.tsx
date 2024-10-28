import classNames from "classnames";
import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";

import { OpenStatus, useOpen } from "../../../hooks";
import { InputLabel, ComponentSize } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../helpers/getInputsErrorStyle";
import { getInputStyle } from "../helpers/getInputStyle";
import { Textfield } from "../Textfield";
import { ColorPickerPopup } from "./ColorPickerPopup/ColorPickerPopup";
import { rgbToHex, rgbToHsl, valueToRgb } from "./helpers";
import {
  ColorPickerProps,
  defaultColorPickerValue,
  ReturnedColor,
  RgbValue,
} from "./types";

import "./ColorPicker.css";

const ColorPicker = ({
  name = undefined,
  disabled = false,
  readOnly = false,
  onChange,
  label = undefined,
  error = undefined,
  labelType = InputLabel.LEFT,
  labelWidth = 30,
  floatingInputWidth = 100,
  defaultInternalValue = defaultColorPickerValue,
  returnedColorType,
  size = ComponentSize.MEDIUM,
  noBottomMargin = false,
  classNamesObj,
  onOpen,
  onClose,
}: ColorPickerProps) => {
  const inputContainerRef = useRef<HTMLDivElement>(null);

  const {
    openStatus,
    toggleOpenStatus,
    handleClose: handlePopupClose,
  } = useOpen({ delay: 100 });

  const [value, setValue] = useState<RgbValue>(
    valueToRgb(defaultInternalValue)
  );

  const hexValue = rgbToHex(value.r, value.g, value.b);
  const colorPreviewElement = inputContainerRef.current?.querySelector(
    ".m-color-preview"
  ) as HTMLInputElement | null | undefined;

  const handleOpen = () => {
    if (readOnly) {
      return;
    }

    onOpen && onOpen();
    toggleOpenStatus();
  };

  const handleClose = () => {
    if (onClose) {
      switch (returnedColorType) {
        case ReturnedColor.RGB:
          onClose(value);
          break;
        case ReturnedColor.HSL:
          onClose(rgbToHsl(value.r, value.g, value.b));
          break;
        case ReturnedColor.HEX:
          onClose(rgbToHex(value.r, value.g, value.b));
          break;
      }
    }

    handlePopupClose();
  };

  const handleChange = (newValue: RgbValue): void => {
    setValue(newValue);

    if (!onChange) {
      return;
    }

    switch (returnedColorType) {
      case ReturnedColor.RGB:
        return onChange({
          target: { name: name || "color-picker", value: newValue },
        });
      case ReturnedColor.HSL:
        return onChange({
          target: {
            name: name || "color-picker",
            value: rgbToHsl(newValue.r, newValue.g, newValue.b),
          },
        });
      case ReturnedColor.HEX:
        return onChange({
          target: {
            name: name || "color-picker",
            value: rgbToHex(newValue.r, newValue.g, newValue.b),
          },
        });
    }
  };

  return (
    <>
      <InputContainer
        disabled={disabled}
        className={classNames(
          "m-color-picker-container",
          classNamesObj?.container
        )}
        size={size}
        error={error}
        noBottomMargin={noBottomMargin}
      >
        <div
          ref={inputContainerRef}
          style={getInputStyle(
            labelType as InputLabel,
            label,
            labelWidth,
            floatingInputWidth
          )}
        >
          {labelType === InputLabel.RIGHT && (
            <div
              className="m-color-preview-square"
              style={{ backgroundColor: hexValue }}
              onClick={() => !disabled && handleOpen()}
            />
          )}

          <Textfield
            classNamesObj={{
              input: classNames("m-color-preview", classNamesObj?.input, {
                "popup-open": openStatus !== OpenStatus.CLOSED,
              }),
            }}
            readOnly
            onClick={() => !disabled && handleOpen()}
            value={hexValue}
            standAloneConfig={{
              style: {
                //@ts-expect-error ts(2353) styles attribute does not expect css variable
                "--box-shadow-color": hexValue,
                width: "100%",
              },
            }}
          />
          {labelType !== InputLabel.RIGHT && (
            <div
              className="m-color-preview-square"
              style={{ backgroundColor: hexValue }}
              onClick={() => !disabled && handleOpen()}
            />
          )}
        </div>
        {label && (
          <InputsLabel
            label={label}
            labelType={labelType}
            className={classNames("color-picker", classNamesObj?.label)}
            labelWidth={labelWidth}
            forceFloating={labelType === InputLabel.FLOATING}
          />
        )}
        {error && (
          <InputError
            style={getInputsErrorStyle(
              labelType as InputLabel,
              labelWidth,
              floatingInputWidth
            )}
            className={classNames("color-picker-error", classNamesObj?.error)}
            error={error}
          />
        )}
      </InputContainer>
      {colorPreviewElement &&
        openStatus !== OpenStatus.CLOSED &&
        createPortal(
          <ColorPickerPopup
            value={value}
            onChange={handleChange}
            className={classNames(openStatus, classNamesObj?.popup)}
            parentElement={colorPreviewElement}
            handleClose={handleClose}
          />,
          document.body
        )}
    </>
  );
};

export default ColorPicker;
