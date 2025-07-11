import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useCallback, useMemo, useState } from "react";

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
  onBlur,
  onClear,
  name = undefined,
  label = undefined,
  placeholder = undefined,
  error = undefined,
  classNamesObj = {},

  iconColor,

  labelType = defaultInputPropsValue.labelType,
  labelWidth = defaultInputPropsValue.labelWidth,
  size = defaultInputPropsValue.size,
  disabled = defaultInputPropsValue.disabled,
  readOnly = defaultInputPropsValue.readOnly,
  floatingInputWidth = defaultInputPropsValue.floatingInputWidth,
  marginBottomType = defaultInputPropsValue.marginBottomType,

  autoFocusPopupInput = false,
}: IconFieldProps) => {
  const [internalValue, setInternalValue] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const isControlled = externalValue !== undefined;
  const value = isControlled ? externalValue : internalValue;

  const [handlePopupOpen, alertProps] = useAlert();

  const handleOpen = () => {
    if (readOnly) {
      return;
    }

    handlePopupOpen();
  };

  const handleBlur = (selectedIcon: string | null = value) => {
    if (alertProps.alertOpen !== AlertOpenState.OPENED) {
      return;
    }

    setIsFocused(false);
    alertProps.handleClose();

    onBlur &&
      onBlur(
        {
          target: {
            name: name || "",
            value: selectedIcon,
            checked: false,
            type: "icon",
          },
        },
        selectedIcon
      );
  };

  const handleChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, selectedIcon: string): void => {
    !isControlled && setInternalValue(selectedIcon);

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

    handleBlur(selectedIcon);
  };

  const clearValue = useCallback(
    (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      !isControlled && setInternalValue(null);

      onClear &&
        onClear(
          {
            ...event,
            target: {
              ...event.target,
              name: name || "",
              value: null,
              checked: false,
              type: "icon",
            },
          },
          null
        );
    },
    [isControlled]
  );

  const { containerClassName, labelClassName, errorClassName, popupClassName, ...standAloneTextfieldClassNames } =
    classNamesObj;

  const memoIconPreviewSquare = useMemo(
    () => (
      <IconPreviewSquare icon={value} color={iconColor}>
        <FontAwesomeIcon icon="x" onClick={clearValue} className="m-clear-icon" />
      </IconPreviewSquare>
    ),
    [value, iconColor, clearValue]
  );

  return (
    <>
      <InputContainer
        disabled={disabled}
        className={classNames("m-icon-field-container", containerClassName)}
        size={size}
        error={error}
        marginBottomType={marginBottomType}
        labelType={labelType}
      >
        <StandAloneTextfield
          classNamesObj={{
            standAloneTextfieldContainerClassName: `${standAloneTextfieldClassNames.standAloneTextfieldContainerClassName} flex g-2-rem`,
            prefixClassName: standAloneTextfieldClassNames.prefixClassName,
            inputClassName: classNames("m-icon-preview", standAloneTextfieldClassNames.inputClassName),
          }}
          readOnly
          onClick={() => !disabled && handleOpen()}
          value={value || ""}
          disabled={disabled}
          placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
          style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}
          standAloneTextfieldChildren={memoIconPreviewSquare}
          standAloneTextfieldChildrenPosition="left"
        />

        {label && (
          <InputsLabel
            label={label}
            labelType={labelType}
            className={classNames("m-icon-field-label", labelClassName)}
            labelWidth={labelWidth}
            isFocused={isFocused || alertProps.alertOpen === AlertOpenState.OPENED}
            isFilled={!!value}
          />
        )}
        {error && (
          <InputError
            style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)}
            className={classNames("icon-field-error", errorClassName)}
            error={error}
          />
        )}
      </InputContainer>
      <Alert
        {...alertProps}
        handleClose={handleBlur}
        className={classNames("m-icon-field-popup", popupClassName)}
        header="Icon selector popup"
      >
        <IconFieldPopupContent
          onChange={handleChange}
          value={value as IconName | null}
          autoFocusPopupInput={autoFocusPopupInput}
        />
      </Alert>
    </>
  );
};

export default IconField;
