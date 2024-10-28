import classNames from "classnames";
import React, { ChangeEvent, FocusEvent, useState } from "react";
import InputMask, { InputState } from "react-input-mask";

import { InputLabel, ComponentSize } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../helpers/getInputsErrorStyle";
import { getInputStyle } from "../helpers/getInputStyle";
import { TextfieldProps } from "./types";

import "./Textfield.css";

const defaultFormatChars = {
  "9": "[0-9]",
  a: "[A-Za-z]",
  "*": "[A-Za-z0-9]",
};

const Textfield = (props: TextfieldProps) => {
  const {
    value: externalValue = undefined,
    name = undefined,
    disabled = false,
    readOnly = false,
    onChange,
    onBlur,
    onFocus,
    onClick,
    label = undefined,
    error = undefined,
    labelType = `${InputLabel.LEFT}`,
    placeholder = undefined,
    labelWidth = 30,
    floatingInputWidth = 100,
    defaultInternalValue,
    type = "text",
    autoFocus = false,
    mask = "",
    advancedMask = undefined,
    size = ComponentSize.MEDIUM,
    noBottomMargin = false,
    classNamesObj,
    standAloneConfig,
  } = props;

  const [internalValue, setInternalValue] = useState<string>(
    defaultInternalValue || ""
  );
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const value: string =
    externalValue !== undefined ? externalValue : internalValue;

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    onFocus && onFocus(e);
    setIsFocused(true);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    onClick && onClick(event);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);

    onBlur && onBlur(e, e.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e, e.target.value);
    setInternalValue(e.target.value);
  };

  const handleBeforeMaskedValueChange = (
    newState: InputState,
    oldState: InputState,
    userInput: string
  ): InputState => {
    if (!advancedMask) {
      return newState;
    }

    if (!advancedMask.beforeChange) {
      return newState;
    }

    return advancedMask.beforeChange(
      newState,
      oldState,
      userInput,
      advancedMask.formatChars
    );
  };

  if (standAloneConfig) {
    return (
      <InputMask
        readOnly={readOnly}
        maskChar={null}
        disabled={disabled}
        name={name}
        className={classNames(
          "m-input",
          "m-textfield",
          classNamesObj?.input,
          labelType
        )}
        type={type}
        style={standAloneConfig.style}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClick={handleClick}
        autoFocus={autoFocus}
        placeholder={
          labelType === InputLabel.FLOATING
            ? undefined
            : placeholder || (label ? `${label}...` : "")
        }
        //! Mask Props
        {...(advancedMask
          ? {
              ...advancedMask,
              beforeMaskedValueChange: handleBeforeMaskedValueChange,
            }
          : { mask: mask, formatChars: defaultFormatChars })}
      />
    );
  }

  return (
    <InputContainer
      disabled={disabled}
      className={classNames("m-textfield-container", classNamesObj?.container)}
      size={size}
      error={error}
      noBottomMargin={noBottomMargin}
    >
      <InputMask
        readOnly={readOnly}
        maskChar={null}
        disabled={disabled}
        name={name}
        className={classNames(
          "m-input",
          "m-textfield",
          classNamesObj?.input,
          labelType
        )}
        type={type}
        style={getInputStyle(
          labelType as InputLabel,
          label,
          labelWidth,
          floatingInputWidth
        )}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClick={handleClick}
        autoFocus={autoFocus}
        placeholder={
          labelType === InputLabel.FLOATING
            ? undefined
            : placeholder || (label ? `${label}...` : "")
        }
        //! Mask Props
        {...(advancedMask
          ? {
              ...advancedMask,
              beforeMaskedValueChange: handleBeforeMaskedValueChange,
            }
          : { mask: mask, formatChars: defaultFormatChars })}
      />
      {label && (
        <InputsLabel
          label={label}
          labelType={labelType}
          className={classNames("textfield", classNamesObj?.label)}
          labelWidth={labelWidth}
          isFocused={isFocused}
          isFilled={!!value}
        />
      )}
      {error && (
        <InputError
          style={getInputsErrorStyle(
            labelType as InputLabel,
            labelWidth,
            floatingInputWidth
          )}
          className={classNames("textfield-error", classNamesObj?.error)}
          error={error}
        />
      )}
    </InputContainer>
  );
};

export default Textfield;
