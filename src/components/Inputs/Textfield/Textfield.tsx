import classNames from "classnames";
import React, { ChangeEvent, FocusEvent, useState } from "react";

import { useDebounceFunction } from "../../../hooks";
import { ComponentSize, InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { StandAloneTextfield } from "../_inputsComponents/StandAloneTextfield/StandAloneTextfield";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { TextfieldProps } from "./types";

const Textfield = (props: TextfieldProps) => {
  const {
    value: externalValue = undefined,
    disabled = false,
    onChange,
    onBlur,
    onFocus,
    onClick,
    onDebounce,
    debounceDelay = 300,
    label = undefined,
    error = undefined,
    labelType = `${InputLabel.LEFT}`,
    placeholder = undefined,
    labelWidth = 30,
    floatingInputWidth = 100,
    defaultValue,
    size = ComponentSize.MEDIUM,
    disableDefaultMargin = false,
    classNamesObj,
    ...otherProps
  } = props;

  const [internalValue, setInternalValue] = useState<string>(defaultValue || "");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const value: string = externalValue !== undefined ? externalValue : internalValue;

  const [handleDebounce] = useDebounceFunction(onDebounce, debounceDelay);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    handleDebounce(e, e.target.value);

    onChange && onChange(e, e.target.value);
    setInternalValue(e.target.value);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    onFocus && onFocus(e);
    setIsFocused(true);
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    onClick && onClick(event);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);

    onBlur && onBlur(e, e.target.value);
  };

  return (
    <InputContainer
      disabled={disabled}
      className={classNames("m-textfield-container", classNamesObj?.container)}
      size={size}
      error={error}
      disableDefaultMargin={disableDefaultMargin}
    >
      <StandAloneTextfield
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClick={handleClick}
        placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
        style={getInputStyle(labelType as InputLabel, label, labelWidth, floatingInputWidth)}
        disabled={disabled}
        className={classNamesObj?.input}
        value={value}
        size={size}
        {...otherProps}
      />
      {label && (
        <InputsLabel
          label={label}
          labelType={labelType}
          className={classNames("m-textfield-label", classNamesObj?.label)}
          labelWidth={labelWidth}
          isFocused={isFocused}
          isFilled={!!value}
          prefix={otherProps.prefix}
        />
      )}
      {error && (
        <InputError
          style={getInputsErrorStyle(labelType as InputLabel, labelWidth, floatingInputWidth)}
          className={classNames("textfield-error", classNamesObj?.error)}
          error={error}
        />
      )}
    </InputContainer>
  );
};

export default Textfield;
