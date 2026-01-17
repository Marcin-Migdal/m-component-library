import classNames from "classnames";
import React, { useCallback, useMemo, useRef, useState } from "react";

import { Portal } from "../../Portal/Portal";

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
import {
  ColorPickerBlurEvent,
  ColorPickerChangeEvent,
  ColorPickerProps,
  ColorValue,
  ReturnedColor,
  RgbValue,
} from "./types";

import "./ColorPicker.scss";

const innerDefaultValue: RgbValue = {
  r: 255,
  g: 255,
  b: 255,
};

const getValue = <TExternalValue extends ColorValue | null>(
  externalValue: TExternalValue,
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

const ColorPicker = <TReturnedColor extends ReturnedColor = ReturnedColor.RGB>({
  value: externalValue,
  onChange,
  onBlur,
  name = undefined,
  label = undefined,
  placeholder = undefined,
  error = undefined,
  classNamesObj = {},

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

  const handleOpen = useCallback(() => {
    if (readOnly || openStatus === OpenStatus.OPENED) {
      return;
    }

    handlePopupOpen();
  }, [readOnly, openStatus]);

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
      case ReturnedColor.RGB: {
        const event = {
          target: {
            ...changeEventTarget,
            value: rgbValue,
          },
        } as ColorPickerBlurEvent<TReturnedColor>;

        return onBlur(event, value);
      }
      case ReturnedColor.HSL: {
        const event = {
          target: {
            ...changeEventTarget,
            value: value ? rgbToHsl(rgbValue) : null,
          },
        } as ColorPickerBlurEvent<TReturnedColor>;

        return onBlur(event, value);
      }
      case ReturnedColor.HEX: {
        const event = {
          target: {
            ...changeEventTarget,
            value: rgbToHex(rgbValue),
          },
        } as ColorPickerBlurEvent<TReturnedColor>;

        return onBlur(event, value);
      }
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
      case ReturnedColor.RGB: {
        const event = {
          target: {
            ...changeEventTarget,
            value: pickedColor,
          },
        } as ColorPickerChangeEvent<TReturnedColor>;

        return onChange(event, pickedColor);
      }
      case ReturnedColor.HSL: {
        const event = {
          target: {
            ...changeEventTarget,
            value: rgbToHsl(pickedColor),
          },
        } as ColorPickerChangeEvent<TReturnedColor>;

        return onChange(event, pickedColor);
      }
      case ReturnedColor.HEX: {
        const event = {
          target: {
            ...changeEventTarget,
            value: rgbToHex(pickedColor),
          },
        } as ColorPickerChangeEvent<TReturnedColor>;

        return onChange(event, pickedColor);
      }
    }
  };

  const { containerClassName, labelClassName, errorClassName, popupClassName, ...standAloneTextfieldClassNames } =
    classNamesObj;

  const memoColorPreviewSquare = useMemo(
    () => (
      <ColorPreviewSquare
        style={!hexValue ? { border: "2px solid var(--box-shadow-color)" } : undefined}
        color={hexValue}
        disabled={disabled}
        onClick={handleOpen}
      />
    ),
    [hexValue, disabled, handleOpen],
  );

  return (
    <>
      <InputContainer
        ref={inputContainerRef}
        disabled={disabled}
        className={classNames("m-color-picker-container", containerClassName)}
        size={size}
        error={error}
        marginBottomType={marginBottomType}
        labelType={labelType}
      >
        <StandAloneTextfield
          style={{
            ...getInputStyle(labelType, label, labelWidth, floatingInputWidth),
            //@ts-expect-error ts(2353) styles attribute does not expect css variable
            "--box-shadow-color": hexValue,
          }}
          classNamesObj={{
            prefixClassName: standAloneTextfieldClassNames.prefixClassName,
            standAloneTextfieldContainerClassName: `${standAloneTextfieldClassNames.standAloneTextfieldContainerClassName} flex g-2-rem`,
            inputClassName: classNames("m-color-preview", standAloneTextfieldClassNames.inputClassName, {
              "popup-open": openStatus !== OpenStatus.CLOSED,
            }),
          }}
          readOnly
          onClick={() => !disabled && handleOpen()}
          value={value === null ? "" : hexValue}
          placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
          standAloneTextfieldChildren={memoColorPreviewSquare}
          standAloneTextfieldChildrenPosition="left"
        />

        {label && (
          <InputsLabel
            label={label}
            labelType={labelType}
            className={classNames("m-color-picker-label", labelClassName)}
            labelWidth={labelWidth}
            forceFloating={labelType === InputLabel.FLOATING}
          />
        )}
        {error && (
          <InputError
            style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)}
            className={classNames("color-picker-error", errorClassName)}
            error={error}
          />
        )}
      </InputContainer>
      {inputContainerRef.current && openStatus !== OpenStatus.CLOSED && (
        <Portal>
          <ColorPickerPopup
            value={value}
            onChange={handleChange}
            className={classNames(openStatus, popupClassName)}
            parentElement={inputContainerRef.current}
            handleClose={handleBlur}
          />
        </Portal>
      )}
    </>
  );
};

export default ColorPicker;
