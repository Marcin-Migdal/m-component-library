import classNames from "classnames";
import React, { ChangeEvent, FocusEvent, useState } from "react";

import { useDebounceFunction } from "../../../hooks";
import { ComponentSize, InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { TextareaProps } from "./types";

import "./Textarea.scss";

const Textarea = ({
  value: externalValue = undefined,
  name = undefined,
  onChange,
  onBlur,
  onDebounce,
  debounceDelay = 300,
  label,
  error,
  labelType = InputLabel.FLOATING,
  placeholder,
  defaultValue,
  autoFocus = false,
  labelWidth = 30,
  floatingInputWidth = 100,
  row = 4,
  size = ComponentSize.MEDIUM,
  disabled = false,
  readOnly = false,
  disableDefaultMargin = false,
  classNamesObj,
  ...otherProps
}: TextareaProps) => {
  const [internalValue, setInternalValue] = useState<string>(defaultValue || "");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const value: string = externalValue !== undefined ? externalValue : internalValue;

  const [handleDebounce] = useDebounceFunction(onDebounce, debounceDelay);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);

    onBlur && onBlur(e, e.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    handleDebounce(e, e.target.value);
    onChange && onChange(e, e.target.value);
    setInternalValue(e.target.value);
  };

  return (
    <InputContainer
      disabled={disabled}
      className={classNames("m-textarea-container", classNamesObj?.container)}
      size={size}
      error={error}
      disableDefaultMargin={disableDefaultMargin}
    >
      <textarea
        readOnly={readOnly}
        name={name}
        rows={row}
        style={getInputStyle(labelType as InputLabel, label, labelWidth, floatingInputWidth)}
        className={classNames("m-input", "m-textarea", "m-scroll", classNamesObj?.input, labelType)}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
        autoFocus={autoFocus}
        disabled={disabled}
        {...otherProps}
      />
      {label && (
        <InputsLabel
          label={label}
          labelType={labelType}
          className={classNames("m-textarea-label", classNamesObj?.label)}
          labelWidth={labelWidth}
          isFocused={isFocused}
          isFilled={!!value}
        />
      )}
      {error && (
        <InputError
          style={getInputsErrorStyle(labelType as InputLabel, labelWidth, floatingInputWidth)}
          className={classNames("textarea-error", classNamesObj?.error)}
          error={error}
        />
      )}
    </InputContainer>
  );
};

export default Textarea;
