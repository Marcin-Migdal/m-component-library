import classNames from "classnames";
import React, { ChangeEvent, FocusEvent, useState } from "react";

import { ComponentSize, InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../helpers/getInputsErrorStyle";
import { getInputStyle } from "../helpers/getInputStyle";
import { TextareaProps } from "./types";

import "./Textarea.css";

const Textarea = ({
  value: externalValue = undefined,
  name = undefined,
  onChange,
  onBlur,
  label,
  error,
  labelType = InputLabel.LEFT,
  placeholder,
  defaultInternalValue,
  autoFocus = false,
  labelWidth = 30,
  floatingInputWidth = 100,
  row = 4,
  size = ComponentSize.MEDIUM,
  disabled = false,
  readOnly = false,
  disableDefaultMargin: disableDefaultMargin = false,
  classNamesObj,
  ...otherProps
}: TextareaProps) => {
  const [internalValue, setInternalValue] = useState<string>(defaultInternalValue || "");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const value: string = externalValue !== undefined ? externalValue : internalValue;

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);

    onBlur && onBlur(e, e.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
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
        className={classNames("m-input", "m-textarea", classNamesObj?.input, labelType)}
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
          className={classNames("textarea", classNamesObj?.label)}
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
