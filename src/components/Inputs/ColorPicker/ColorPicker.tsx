import classNames from "classnames";
import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";

import { OpenStatus, useOpen } from "../../../hooks";
import { MInputChangeEvent } from "../../../types/MInputChangeEvent";
import { InputLabel } from "../../global-types";
import { ColorPreviewSquare } from "../../Miscellaneous/ColorPreviewSquare";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { StandAloneTextfield } from "../_inputsComponents/StandAloneTextfield/StandAloneTextfield";
import { defaultInputPropsValue } from "../_inputUtils/defaultInputPropsValue";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { ColorPickerPopup } from "./ColorPickerPopup/ColorPickerPopup";
import { isValidColor, rgbToHex, rgbToHsl, valueToRgb } from "./helpers";
import { ColorPickerProps, ColorValue, ReturnedColor, RgbValue } from "./types";

import "./ColorPicker.scss";

const innerDefaultValue: RgbValue = {
  r: 255,
  g: 255,
  b: 255,
};

const getValue = <TExternalValue extends ColorValue | null>(
  externalValue: TExternalValue
): TExternalValue extends null ? null : RgbValue => {
  if (externalValue === null) {
    return null as TExternalValue extends null ? null : RgbValue;
  }

  if (!isValidColor(externalValue)) {
    return innerDefaultValue as TExternalValue extends null ? null : RgbValue;
  }

  return valueToRgb(externalValue) as TExternalValue extends null ? null : RgbValue;
};

/**
 * ColorPicker component allowing users to select and manipulate colors.
 * Supports RGB, HSL, and HEX formats.
 * Provides event handlers for opening, changing, and closing the color selection.
 */

const ColorPicker = <TReturnedColor extends ReturnedColor>({
  value: externalValue,
  onChange,
  onBlur,
  name = undefined,
  label = undefined,
  placeholder = undefined,
  error = undefined,
  classNamesObj,

  labelType = defaultInputPropsValue.labelType,
  labelWidth = defaultInputPropsValue.labelWidth,
  size = defaultInputPropsValue.size,
  disabled = defaultInputPropsValue.disabled,
  readOnly = defaultInputPropsValue.readOnly,
  marginBottomType = defaultInputPropsValue.marginBottomType,
  floatingInputWidth = defaultInputPropsValue.floatingInputWidth,

  returnedColorType = "rgb" as TReturnedColor,
  defaultValue,
}: ColorPickerProps<TReturnedColor>) => {
  const inputContainerRef = useRef<HTMLDivElement>(null);

  const { openStatus, handleOpen: handlePopupOpen, handleClose: handlePopupClose } = useOpen({ delay: 100 });

  const [internalValue, setInternalValue] = useState<RgbValue | null>(defaultValue ? valueToRgb(defaultValue) : null);

  const isControlled = externalValue !== undefined;

  const value = isControlled ? getValue(externalValue) : internalValue;
  const displayValue = getValue(value || innerDefaultValue);

  const hexValue = rgbToHex(displayValue);

  const colorPreviewElement = inputContainerRef.current?.querySelector(".m-color-preview") as
    | HTMLInputElement
    | null
    | undefined;

  const handleOpen = () => {
    if (readOnly || openStatus === OpenStatus.OPENED) {
      return;
    }

    handlePopupOpen();
  };

  const handleBlur = (rgbValue: RgbValue) => {
    handlePopupClose();

    if (!onBlur) {
      return;
    }

    const changeEventTarget: Omit<MInputChangeEvent["target"], "value"> = {
      name: name || "",
      checked: false,
      type: "color",
    };

    switch (returnedColorType) {
      case "rgb":
        return onBlur(
          {
            target: {
              ...changeEventTarget,
              value: rgbValue,
            },
          },
          value
        );
      case "hsl":
        return onBlur(
          {
            target: {
              ...changeEventTarget,
              value: value ? rgbToHsl(rgbValue) : null,
            },
          },
          value
        );
      case "hex":
        return onBlur(
          {
            target: {
              ...changeEventTarget,
              value: rgbToHex(rgbValue),
            },
          },
          value
        );
    }
  };

  const handleChange = (pickedColor: RgbValue): void => {
    !isControlled && setInternalValue(pickedColor);

    if (!onChange) {
      return;
    }

    const changeEventTarget: Omit<MInputChangeEvent["target"], "value"> = {
      name: name || "",
      checked: false,
      type: "color",
    };

    switch (returnedColorType) {
      case "rgb":
        return onChange(
          {
            target: {
              ...changeEventTarget,
              value: pickedColor,
            },
          },
          pickedColor
        );
      case "hsl":
        return onChange(
          {
            target: {
              ...changeEventTarget,
              value: rgbToHsl(pickedColor),
            },
          },
          pickedColor
        );
      case "hex":
        return onChange(
          {
            target: {
              ...changeEventTarget,
              value: rgbToHex(pickedColor),
            },
          },
          pickedColor
        );
    }
  };

  return (
    <>
      <InputContainer
        disabled={disabled}
        className={classNames("m-color-picker-container", classNamesObj?.container)}
        size={size}
        error={error}
        marginBottomType={marginBottomType}
        labelType={labelType}
      >
        <div
          className="m-color-preview-container"
          ref={inputContainerRef}
          style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}
        >
          <ColorPreviewSquare
            style={!hexValue ? { border: "2px solid var(--box-shadow-color)" } : undefined}
            color={hexValue}
            disabled={disabled}
            onClick={handleOpen}
          />
          <StandAloneTextfield
            className={classNames("m-color-preview", classNamesObj?.input, {
              "popup-open": openStatus !== OpenStatus.CLOSED,
            })}
            readOnly
            onClick={() => !disabled && handleOpen()}
            value={value === null ? "" : hexValue}
            placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
            style={{
              //@ts-expect-error ts(2353) styles attribute does not expect css variable
              "--box-shadow-color": hexValue,
              width: "100%",
            }}
          />
        </div>
        {label && (
          <InputsLabel
            label={label}
            labelType={labelType}
            className={classNames("m-color-picker-label", classNamesObj?.label)}
            labelWidth={labelWidth}
            forceFloating={labelType === InputLabel.FLOATING}
          />
        )}
        {error && (
          <InputError
            style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)}
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
            handleClose={handleBlur}
          />,
          document.body
        )}
    </>
  );
};

export default ColorPicker;
