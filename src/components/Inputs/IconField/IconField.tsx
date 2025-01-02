import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";

import { ComponentSize, InputLabel } from "../../global-types";
import { Alert, AlertOpenState } from "../../Popups";
import { useAlert } from "../../Popups/Alerts/hooks/useAlertOpen";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { StandAloneTextfield } from "../_inputsComponents/StandAloneTextfield/StandAloneTextfield";
import { RgbValue, valueToRgb } from "../ColorPicker";
import { getInputStyle } from "../helpers/getInputStyle";
import { getIconColor } from "./helpers/getIconColor";
import { getIconPreviewBackgroundColor } from "./helpers/getIconPreviewBackgroundColor";
import { IconFieldPopupContent } from "./IconFieldPopup/IconFieldPopup";
import { IconFieldProps } from "./types";

import "./IconField.css";

const IconField = ({
  value: externalValue = undefined,
  name = undefined,
  disabled = false,
  readOnly = false,
  onChange,
  label = undefined,
  error = undefined,
  labelType = InputLabel.LEFT,
  labelWidth = 30,
  floatingInputWidth = 100,
  size = ComponentSize.MEDIUM,
  disableDefaultMargin = false,
  classNamesObj,
  placeholder = undefined,
  iconColor,
  onOpen,
  onClose,
}: IconFieldProps) => {
  const [internalValue, setInternalValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const controlled = externalValue !== undefined;
  const value = controlled ? externalValue : internalValue;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const [handlePopupOpen, alertProps] = useAlert({ onOpen: handleFocus, onClose: handleBlur });

  const handleOpen = () => {
    if (readOnly) {
      return;
    }

    onOpen && onOpen();

    handlePopupOpen();
  };

  const handleClose = () => {
    if (alertProps.alertOpen !== AlertOpenState.OPENED) {
      return;
    }

    if (onClose) {
      onClose(value);
    }

    alertProps.handleClose();
  };

  const handleChange = (selectedIcon: string): void => {
    !controlled && setInternalValue(selectedIcon);

    onChange &&
      onChange({
        target: {
          name: name || "",
          value: selectedIcon,
        },
      });

    handleClose();
  };

  const clearValue = () => {
    handleChange("");
  };

  const rgbIconColor: RgbValue | undefined = iconColor ? valueToRgb(iconColor) : undefined;

  return (
    <>
      <InputContainer
        disabled={disabled}
        className={classNames("m-icon-field-container", classNamesObj?.container)}
        size={size}
        error={error}
        disableDefaultMargin={disableDefaultMargin}
      >
        <div
          className="m-icon-preview-container"
          style={getInputStyle(labelType as InputLabel, label, labelWidth, floatingInputWidth)}
        >
          <div
            className="m-icon-preview-square"
            style={{
              backgroundColor: rgbIconColor
                ? getIconPreviewBackgroundColor(rgbIconColor)
                : "var(--input-background-color)",
            }}
          >
            {value && (
              <>
                <FontAwesomeIcon
                  icon={value as IconName}
                  className="m-icon-preview"
                  style={{
                    color: rgbIconColor ? getIconColor(rgbIconColor) : "var(--input-color)",
                  }}
                />
                <FontAwesomeIcon icon="x" onClick={clearValue} className="m-clear-icon" />
              </>
            )}
          </div>

          <StandAloneTextfield
            className={classNames("m-icon-preview", classNamesObj?.input)}
            readOnly
            onClick={() => !disabled && handleOpen()}
            value={value as string}
            disabled={disabled}
            placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
            style={{ width: "100%" }}
          />
        </div>
        {label && (
          <InputsLabel
            label={label}
            labelType={labelType}
            className={classNames("m-icon-field-label", classNamesObj?.label)}
            labelWidth={labelWidth}
            isFocused={isFocused || alertProps.alertOpen === AlertOpenState.OPENED}
            isFilled={!!value}
          />
        )}
        {error && (
          <InputError
            style={getInputsErrorStyle(labelType as InputLabel, labelWidth, floatingInputWidth)}
            className={classNames("icon-field-error", classNamesObj?.error)}
            error={error}
          />
        )}
      </InputContainer>
      <Alert {...alertProps} className="m-icon-field-popup" header="Icon selector popup">
        <IconFieldPopupContent onChange={handleChange} value={value as IconName} />
      </Alert>
    </>
  );
};

export default IconField;
