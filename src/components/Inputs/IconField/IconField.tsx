import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";

import { InputLabel } from "../../global-types";
import { IconPreviewSquare } from "../../Miscellaneous/IconPreviewSquare";
import { Alert, AlertOpenState } from "../../Popups";
import { useAlert } from "../../Popups/Alerts/hooks/useAlert";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { StandAloneTextfield } from "../_inputsComponents/StandAloneTextfield/StandAloneTextfield";
import { defaultInputPropsValue } from "../_inputUtils/defaultInputPropsValue";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { IconFieldPopupContent } from "./IconFieldPopup/IconFieldPopup";
import { IconFieldProps } from "./types";

import "./IconField.scss";

const IconField = ({
  value: externalValue = undefined,
  onChange,
  onClear,
  name = undefined,
  label = undefined,
  placeholder = undefined,
  error = undefined,
  classNamesObj,

  iconColor,

  labelType = defaultInputPropsValue.labelType,
  labelWidth = defaultInputPropsValue.labelWidth,
  size = defaultInputPropsValue.size,
  disabled = defaultInputPropsValue.disabled,
  readOnly = defaultInputPropsValue.readOnly,
  floatingInputWidth = defaultInputPropsValue.floatingInputWidth,
  marginBottomType = defaultInputPropsValue.marginBottomType,

  onOpen,
  onClose,
  autoFocusPopupInput = false,
}: IconFieldProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(undefined);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const controlled = externalValue !== undefined;
  const value = controlled ? externalValue : internalValue;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const [handlePopupOpen, alertProps] = useAlert({
    onOpen: handleFocus,
    onClose: () => {
      if (onClose) {
        onClose(value);
      }

      handleBlur();
    },
  });

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

    alertProps.handleClose();
  };

  const handleChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, selectedIcon: string): void => {
    !controlled && setInternalValue(selectedIcon);

    onChange &&
      onChange(
        {
          ...event,
          target: {
            ...event.target,
            name: name || "",
            value: selectedIcon,
            checked: false,
            type: "icon",
          },
        },
        selectedIcon
      );

    handleClose();
  };

  const clearValue = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    !controlled && setInternalValue(undefined);

    onClear &&
      onClear(
        {
          ...event,
          target: {
            ...event.target,
            name: name || "",
            value: undefined,
            checked: false,
            type: "icon",
          },
        },
        undefined
      );
  };

  return (
    <>
      <InputContainer
        disabled={disabled}
        className={classNames("m-icon-field-container", classNamesObj?.container)}
        size={size}
        error={error}
        marginBottomType={marginBottomType}
        labelType={labelType}
      >
        <div
          className="m-icon-preview-container"
          style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}
        >
          <IconPreviewSquare icon={value} color={iconColor}>
            <FontAwesomeIcon icon="x" onClick={clearValue} className="m-clear-icon" />
          </IconPreviewSquare>

          <StandAloneTextfield
            className={classNames("m-icon-preview", classNamesObj?.input)}
            readOnly
            onClick={() => !disabled && handleOpen()}
            value={value || ""}
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
            style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)}
            className={classNames("icon-field-error", classNamesObj?.error)}
            error={error}
          />
        )}
      </InputContainer>
      <Alert {...alertProps} className="m-icon-field-popup" header="Icon selector popup">
        <IconFieldPopupContent
          onChange={handleChange}
          value={value as IconName}
          autoFocusPopupInput={autoFocusPopupInput}
        />
      </Alert>
    </>
  );
};

export default IconField;
