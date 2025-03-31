import classNames from "classnames";
import React, { ChangeEvent, FocusEvent, useEffect, useRef, useState } from "react";

import { useDebounceFunction } from "../../../hooks";
import { InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { StandAloneTextfield } from "../_inputsComponents/StandAloneTextfield/StandAloneTextfield";
import { defaultInputPropsValue } from "../_inputUtils/defaultInputPropsValue";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { parseNumberToString } from "./helpers/formatValue";
import { parseStringToNumber } from "./helpers/parseStringToNumber";
import { NumberFieldProps } from "./types";

import { convertEvent } from "./helpers/convertEvent";
import "./styles.scss";

/**
 * NumberField component for user number input.
 * Supports various sizes, states (disabled, read-only), labels, and error messages.
 */
const NumberField = (props: NumberFieldProps) => {
  const {
    min,
    max,
    defaultValue = undefined,
    value: externalValue = undefined,
    onChange,
    onBlur,
    onFocus,
    onClick,
    onDebounce,
    placeholder = undefined,
    label = undefined,
    error = undefined,
    classNamesObj,
    debounceDelay = 300,
    name,
    persistEvent = false,

    labelType = defaultInputPropsValue.labelType,
    labelWidth = defaultInputPropsValue.labelWidth,
    size = defaultInputPropsValue.size,
    disabled = defaultInputPropsValue.disabled,
    marginBottomType = defaultInputPropsValue.marginBottomType,
    floatingInputWidth = defaultInputPropsValue.floatingInputWidth,

    ...otherProps
  } = props;
  const lastValidValue = useRef<number | null>(externalValue ?? defaultValue ?? null);
  const [displayValue, setDisplayValue] = useState<string>(() =>
    parseNumberToString(externalValue ?? defaultValue ?? null)
  );

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [handleDebounce] = useDebounceFunction(onDebounce, debounceDelay);

  useEffect(() => {
    if (externalValue !== undefined && externalValue !== lastValidValue.current) {
      if (externalValue === null) {
        setDisplayValue("");
      } else if (!isNaN(externalValue)) {
        setDisplayValue(parseNumberToString(externalValue));
      }
    }
  }, [externalValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value;

    setDisplayValue(inputValue);

    if (inputValue === "-" || inputValue === "." || inputValue === "-.") {
      return;
    }

    const parsedValue = parseStringToNumber(inputValue, max, min, lastValidValue.current);

    if (parsedValue !== lastValidValue.current) {
      lastValidValue.current = parsedValue;

      if (!onChange) {
        return;
      }

      const convertedEvent = convertEvent(e, parsedValue, persistEvent);

      handleDebounce(convertedEvent, parsedValue);
      onChange(convertedEvent, parsedValue);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    onFocus && onFocus(e);
    setIsFocused(true);
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    onClick && onClick(event);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);

    if (!onBlur) {
      return;
    }

    const parsedValue = parseStringToNumber(e.target.value, max, min, lastValidValue.current);
    const convertedEvent = convertEvent(e, parsedValue, persistEvent);

    onBlur(convertedEvent, parsedValue);
  };

  return (
    <InputContainer
      disabled={disabled}
      className={classNames("m-numberfield-container", classNamesObj?.container)}
      size={size}
      error={error}
      marginBottomType={marginBottomType}
      labelType={labelType}
    >
      <StandAloneTextfield
        idPrefix="numberfield"
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClick={handleClick}
        placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
        style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}
        disabled={disabled}
        className={classNamesObj?.input}
        value={displayValue}
        size={size}
        type="number"
        {...otherProps}
      />
      {label && (
        <InputsLabel
          label={label}
          labelType={labelType}
          className={classNames("m-numberfield-label", classNamesObj?.label)}
          labelWidth={labelWidth}
          isFocused={isFocused}
          isFilled={!!displayValue}
          prefix={otherProps.prefix}
        />
      )}
      {error && (
        <InputError
          style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)}
          className={classNames("numberfield-error", classNamesObj?.error)}
          error={error}
        />
      )}
    </InputContainer>
  );
};

export default NumberField;
