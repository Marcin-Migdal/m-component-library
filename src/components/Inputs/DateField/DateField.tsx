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
import { DateFieldProps, DateValue, ParsableDateValue, ParsableSingleDate } from "./types";

import "./Datefield.theme.scss";

const getDateFieldValue = <TRange extends boolean>(
  range: TRange,
  value: ParsableDateValue<TRange> | null | undefined
): DateValue<TRange> | null => {
  if (!value) {
    return null;
  }

  const convertToDateType = (externalDate: ParsableSingleDate | null): Date | null => {
    if (!externalDate) {
      return null;
    }

    const date = new Date(externalDate);
    return !isNaN(date.getTime()) ? date : null;
  };

  if (range === true && Array.isArray(value)) {
    const [startDate, endDate] = value;

    return [convertToDateType(startDate), convertToDateType(endDate)] as DateValue<TRange>;
  }

  return convertToDateType(value as ParsableSingleDate) as DateValue<TRange>;
};

/** DateField is an input component that allows users to select a single date or a date range.
 * It supports localization, custom styling, and event handlers for managing user interactions. */
export const DateField = <TRange extends boolean = false>(props: DateFieldProps<TRange>) => {
  const {
    defaultValue,
    value: externalValue = undefined,
    onChange,
    onFocus,
    onClick,
    onBlur,
    name,
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
    readOnly = defaultInputPropsValue.readOnly,
    marginBottomType = defaultInputPropsValue.marginBottomType,
    floatingInputWidth = defaultInputPropsValue.floatingInputWidth,

    ...otherProps
  } = props;

  const dateFieldContainerRef = useRef<HTMLDivElement>(null);

  const { openStatus, handleOpen: handlePopupOpen, handleClose: handlePopupClose } = useOpen({ delay: 100 });

  const [internalValue, setInternalValue] = useState<DateValue<TRange> | null>(getDateFieldValue(range, defaultValue));

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [uniqueDatefieldId] = useState<string>(uuId());

  const isControlled = externalValue !== undefined;

  const value = isControlled ? getDateFieldValue(range, externalValue) : internalValue;

  const handleBlur = (selectedDate: DateValue<TRange> | null) => {
    setIsFocused(false);

    handlePopupClose();

    onBlur &&
      onBlur(
        {
          target: {
            name: name || "",
            value: selectedDate,
            checked: false,
            type: "date",
          },
        },
        selectedDate
      );
  };

  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    selectedDate: DateValue<TRange>
  ): void => {
    !isControlled && setInternalValue(selectedDate);

    if (!range || selectedDate[1] !== null) {
      handleBlur(selectedDate);

      if (onBlur) {
        return;
      }
    }

    onChange &&
      onChange(
        {
          ...event,
          target: {
            ...event.target,
            name: name || "",
            value: selectedDate,
            checked: false,
            type: "date",
          },
        },
        selectedDate
      );
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    onFocus && onFocus(e);
    setIsFocused(true);
  };

  const handleOpen = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (readOnly || openStatus === OpenStatus.OPENED) {
      return;
    }

    handlePopupOpen();
    onClick && onClick(event);
  };

  const datefieldElement = document.getElementById(`textfield-${uniqueDatefieldId}`) as HTMLInputElement | null;

  return (
    <InputContainer
      ref={dateFieldContainerRef}
      disabled={disabled}
      className={classNames("m-datefield-container", classNamesObj?.container)}
      size={size}
      error={error}
      marginBottomType={marginBottomType}
      labelType={labelType}
    >
      <StandAloneTextfield
        id={uniqueDatefieldId}
        onFocus={handleFocus}
        onClick={handleOpen}
        placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
        style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}
        disabled={disabled}
        className={classNamesObj?.input}
        value={
          Array.isArray(value)
            ? `${value[0]?.toLocaleDateString(locale) ?? ""} - ${value[1]?.toLocaleDateString(locale) ?? ""}`
            : value?.toLocaleDateString(locale) || ""
        }
        size={size}
        readOnly
        {...otherProps}
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
          style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)}
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
            handleBlur={handleBlur}
          />,
          document.body
        )}
    </InputContainer>
  );
};
