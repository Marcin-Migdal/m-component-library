import classNames from "classnames";
import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";

import { OpenStatus, useOpen } from "../../../hooks";
import { InputLabel } from "../../global-types";
import { ColorPreviewSquare } from "../../Miscellaneous/ColorPreviewSquare";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { StandAloneTextfield } from "../_inputsComponents/StandAloneTextfield/StandAloneTextfield";
import { defaultInputPropsValue } from "../_inputUtils/defaultInputPropsValue";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { ColorPickerPopup } from "./ColorPickerPopup/ColorPickerPopup";
import { rgbToHex, rgbToHsl, valueToRgb } from "./helpers";
import { ColorPickerProps, ReturnedColor, RgbValue } from "./types";

import "./ColorPicker.scss";

/**
 * ColorPicker component allowing users to select and manipulate colors.
 * Supports RGB, HSL, and HEX formats.
 * Provides event handlers for opening, changing, and closing the color selection.
 */
const ColorPicker = <TReturnedColor extends ReturnedColor>({
  onChange,
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
  disableDefaultMargin = defaultInputPropsValue.disableDefaultMargin,
  floatingInputWidth = defaultInputPropsValue.floatingInputWidth,

  returnedColorType = "rgb" as TReturnedColor,
  defaultValue,
  onOpen,
  onClose,
}: ColorPickerProps<TReturnedColor>) => {
  const inputContainerRef = useRef<HTMLDivElement>(null);

  const { openStatus, toggleOpenStatus, handleClose: handlePopupClose } = useOpen({ delay: 100 });

  const [value, setValue] = useState<RgbValue | undefined>(defaultValue ? valueToRgb(defaultValue) : undefined);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const hexValue = value ? rgbToHex(value.r, value.g, value.b) : "#ffffff";

  const colorPreviewElement = inputContainerRef.current?.querySelector(".m-color-preview") as
    | HTMLInputElement
    | null
    | undefined;

  const handleOpen = () => {
    if (readOnly) {
      return;
    }

    onOpen && onOpen();
    toggleOpenStatus();
  };

  const handleClose = () => {
    if (onClose) {
      if (value === undefined) {
        onClose(undefined);
      } else {
        switch (returnedColorType) {
          case "rgb":
            onClose(value);
            break;
          case "hsl":
            onClose(rgbToHsl(value.r, value.g, value.b));
            break;
          case "hex":
            onClose(rgbToHex(value.r, value.g, value.b));
            break;
        }
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
      case "rgb":
        return onChange({
          target: { name: name || "color-picker", value: newValue },
        });
      case "hsl":
        return onChange({
          target: {
            name: name || "color-picker",
            value: rgbToHsl(newValue.r, newValue.g, newValue.b),
          },
        });
      case "hex":
        return onChange({
          target: {
            name: name || "color-picker",
            value: rgbToHex(newValue.r, newValue.g, newValue.b),
          },
        });
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <InputContainer
        disabled={disabled}
        className={classNames("m-color-picker-container", classNamesObj?.container)}
        size={size}
        error={error}
        disableDefaultMargin={disableDefaultMargin}
      >
        <div
          className="m-color-preview-container"
          ref={inputContainerRef}
          style={getInputStyle(labelType as InputLabel, label, labelWidth, floatingInputWidth)}
        >
          <ColorPreviewSquare color={hexValue} disabled={disabled} onClick={handleOpen} />

          <StandAloneTextfield
            className={classNames("m-color-preview", classNamesObj?.input, {
              "popup-open": openStatus !== OpenStatus.CLOSED,
            })}
            readOnly
            onBlur={handleBlur}
            onFocus={handleFocus}
            onClick={() => !disabled && handleOpen()}
            value={hexValue}
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
            isFocused={isFocused}
            isFilled={!!value}
          />
        )}
        {error && (
          <InputError
            style={getInputsErrorStyle(labelType as InputLabel, labelWidth, floatingInputWidth)}
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
