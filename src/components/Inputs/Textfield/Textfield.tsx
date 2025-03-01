import classNames from "classnames";
import React, { ChangeEvent, FocusEvent, useState } from "react";

import { useDebounceFunction } from "../../../hooks";
import { InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { StandAloneTextfield } from "../_inputsComponents/StandAloneTextfield/StandAloneTextfield";
import { defaultInputPropsValue } from "../_inputUtils/defaultInputPropsValue";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { TextfieldProps } from "./types";

/**
 * TextField component for user text input.
 * Supports various sizes, states (disabled, read-only), labels, and error messages.
 */
const Textfield = (props: TextfieldProps) => {
  const {
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

    labelType = defaultInputPropsValue.labelType,
    labelWidth = defaultInputPropsValue.labelWidth,
    size = defaultInputPropsValue.size,
    disabled = defaultInputPropsValue.disabled,
    marginBottomType = defaultInputPropsValue.marginBottomType,
    floatingInputWidth = defaultInputPropsValue.floatingInputWidth,

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
      marginBottomType={marginBottomType}
      labelType={labelType}
    >
      <StandAloneTextfield
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClick={handleClick}
        placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
        style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}
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
          style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)}
          className={classNames("textfield-error", classNamesObj?.error)}
          error={error}
        />
      )}
    </InputContainer>
  );
};

export default Textfield;
