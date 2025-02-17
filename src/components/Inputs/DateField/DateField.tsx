import classNames from "classnames";
import React, { FocusEvent, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { v4 as uuId } from "uuid";

import { OpenStatus, useOpen } from "../../../hooks";
import { InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { StandAloneTextfield } from "../_inputsComponents/StandAloneTextfield/StandAloneTextfield";
import { defaultInputPropsValue } from "../_inputUtils/defaultInputPropsValue";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { DatePickerPopup } from "./DatePickerPopup/DatePickerPopup";
import { DateFieldProps, DateValue, InternalDateValue, SingleDate } from "./types";

import "./Datefield.theme.scss";

const getDateFieldValue = <TRange extends boolean>(
  range: TRange,
  value: DateValue<TRange> | undefined
): InternalDateValue<TRange> | undefined => {
  if (!value) {
    return undefined;
  }

  const convertToDateType = (externalDate: SingleDate | undefined): Date | undefined => {
    if (!externalDate) {
      return undefined;
    }

    const date = new Date(externalDate);
    return !isNaN(date.getTime()) ? date : undefined;
  };

  if (range === true && Array.isArray(value)) {
    const [startDate, endDate] = value;

    return [convertToDateType(startDate), convertToDateType(endDate)] as InternalDateValue<TRange>;
  }

  return convertToDateType(value as SingleDate) as InternalDateValue<TRange>;
};

/** DateField is an input component that allows users to select a single date or a date range.
 * It supports localization, custom styling, and event handlers for managing user interactions. */
export const DateField = <TRange extends boolean>(props: DateFieldProps<TRange>) => {
  const {
    defaultValue,
    value: externalValue = undefined,
    onChange,
    onFocus,
    onClick,
    onClose,
    placeholder = undefined,
    label = undefined,
    error = undefined,
    classNamesObj,

    locale = "en-US",
    range = false as TRange,

    labelType = defaultInputPropsValue.labelType,
    labelWidth = defaultInputPropsValue.labelWidth,
    size = defaultInputPropsValue.size,
    disabled = defaultInputPropsValue.disabled,
    disableDefaultMargin = defaultInputPropsValue.disableDefaultMargin,
    floatingInputWidth = defaultInputPropsValue.floatingInputWidth,

    ...otherProps
  } = props;

  const dateFieldContainerRef = useRef<HTMLDivElement>(null);

  const { openStatus, toggleOpenStatus, handleClose: handlePopupClose } = useOpen({ delay: 100 });

  const [internalValue, setInternalValue] = useState<InternalDateValue<TRange> | undefined>(
    getDateFieldValue(range, defaultValue)
  );

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [uniqueDatefieldId] = useState<string>(uuId());

  const value = getDateFieldValue(range, externalValue !== undefined ? externalValue : internalValue);

  const handleClose = () => {
    onClose && onClose(value);

    handlePopupClose();
  };

  const handleChange = (selectedDate: InternalDateValue<TRange>): void => {
    onChange && onChange(selectedDate);
    setInternalValue(selectedDate);

    if (range && Array.isArray(selectedDate)) {
      if (selectedDate[1]) {
        handleClose();
      }

      return;
    }

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

  const handleBlur = () => {
    setIsFocused(false);
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
        value={
          Array.isArray(value)
            ? `${value[0]?.toLocaleDateString(locale) ?? ""} - ${value[1]?.toLocaleDateString(locale) ?? ""}`
            : value?.toLocaleDateString(locale) || ""
        }
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
            range={range}
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
