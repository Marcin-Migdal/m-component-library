import classNames from "classnames";
import React, { FocusEvent, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { v4 as uuId } from "uuid";

import { OpenStatus, useOpen } from "../../../hooks";
import { ComponentSize, InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { StandAloneTextfield } from "../_inputsComponents/StandAloneTextfield/StandAloneTextfield";
import { getInputStyle } from "../helpers/getInputStyle";
import { DatePickerPopup } from "./DatePickerPopup/DatePickerPopup";
import { DateFieldProps } from "./types";

export const DateField = (props: DateFieldProps) => {
  const {
    value: externalValue = undefined,
    defaultValue,
    disabled = false,
    onChange,
    onFocus,
    onClick,
    onClose,
    label = undefined,
    error = undefined,
    labelType = `${InputLabel.LEFT}`,
    placeholder = undefined,
    labelWidth = 30,
    floatingInputWidth = 100,
    size = ComponentSize.MEDIUM,
    disableDefaultMargin = false,
    classNamesObj,
    locale = "en-US",
    ...otherProps
  } = props;

  const dateFieldContainerRef = useRef<HTMLDivElement>(null);

  const { openStatus, toggleOpenStatus, handleClose: handlePopupClose } = useOpen({ delay: 100 });

  const [internalValue, setInternalValue] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : undefined
  );

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [uniqueDatefieldId] = useState<string>(uuId());

  const value: Date | undefined =
    typeof externalValue === "string"
      ? new Date(externalValue)
      : typeof externalValue === "object"
        ? (externalValue as Date)
        : internalValue;

  const handleChange = (selectedDate: Date): void => {
    onChange && onChange(selectedDate);
    setInternalValue(selectedDate);

    handleClose();
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    onFocus && onFocus(e);
    setIsFocused(true);
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    toggleOpenStatus();
    onClick && onClick(event);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
  };

  const handleClose = () => {
    onClose && onClose(value);

    handlePopupClose();
  };

  const datefieldElement = document.getElementById(`textfield-${uniqueDatefieldId}`) as HTMLInputElement | null;

  return (
    <InputContainer
      ref={dateFieldContainerRef}
      disabled={disabled}
      className={classNames("m-datefield-container", classNamesObj?.container)}
      size={size}
      error={error}
      disableDefaultMargin={disableDefaultMargin}
    >
      <StandAloneTextfield
        id={uniqueDatefieldId}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClick={handleClick}
        placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
        style={getInputStyle(labelType as InputLabel, label, labelWidth, floatingInputWidth)}
        disabled={disabled}
        className={classNamesObj?.input}
        value={value?.toDateString() || ""}
        size={size}
        {...otherProps}
        readOnly
      />
      {label && (
        <InputsLabel
          label={label}
          labelType={labelType}
          className={classNames("m-datefield-label", classNamesObj?.label)}
          labelWidth={labelWidth}
          isFocused={isFocused}
          isFilled={!!value}
        />
      )}
      {error && (
        <InputError
          style={getInputsErrorStyle(labelType as InputLabel, labelWidth, floatingInputWidth)}
          className={classNames("datefield-error", classNamesObj?.error)}
          error={error}
        />
      )}

      {datefieldElement &&
        openStatus !== OpenStatus.CLOSED &&
        createPortal(
          <DatePickerPopup
            locale={locale}
            value={value}
            onChange={handleChange}
            className={classNames(openStatus, classNamesObj?.popup)}
            parentElement={datefieldElement}
            handleClose={handleClose}
          />,
          document.body
        )}
    </InputContainer>
  );
};
