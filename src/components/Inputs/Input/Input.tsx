import React, { CSSProperties, ChangeEvent, useState, FocusEvent } from "react";
import InputMask, { InputState } from "react-input-mask";

import { getInputsErrorStyle } from "../../../helpers/input-error-helpers";
import { InputsLabel } from "../_inputsComponents/InputsLabel/InputsLabel";
import { InputError } from "../_inputsComponents/InputError/InputError";
import { InputProps } from "./Input-interfaces";

import "./Input.css";

const defaultFormatChars = {
    "9": "[0-9]",
    a: "[A-Za-z]",
    "*": "[A-Za-z0-9]",
};

const Input = (props: InputProps) => {
    const {
        value = undefined,
        name = undefined,
        disabled = false,
        onChange,
        onBlur,
        label = undefined,
        error = undefined,
        labelType = "floating",
        placeholder = undefined,
        labelWidth = 30,
        floatingInputWidth = 100,
        defaultInternalValue,
        type = "text",
        autoFocus = false,
        mask = "",
        advancedMask = undefined,
        ...otherProps
    } = props;

    const [internalValue, setInternalValue] = useState<string>(defaultInternalValue || "");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const _value: string = value != undefined ? value : internalValue;

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);

        onBlur && onBlur(e, e.target.value);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange && onChange(e, e.target.value);
        setInternalValue(e.target.value);
    };

    const handleBeforeMaskedValueChange = (newState: InputState, oldState: InputState, userInput: string): InputState =>
        advancedMask?.beforeChange(newState, oldState, userInput, advancedMask.formatChars) as InputState;

    const labelClasses = `m-input-label ${labelType} ${labelType == "floating" && isFocused ? "focused" : _value ? "filled" : ""}`;

    const inputStyle: CSSProperties = {
        marginLeft: labelType == "left" ? `${labelWidth}%` : "unset",
        width: labelType == "floating" ? `${floatingInputWidth}%` : `${100 - labelWidth}%`,
    };

    return (
        <div className={`m-input-container ${error ? "error" : ""}`}>
            <InputMask
                disabled={disabled}
                name={name}
                className={`m-input ${labelType}`}
                type={type}
                style={inputStyle}
                value={_value}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                autoFocus={autoFocus}
                placeholder={labelType == "floating" ? undefined : placeholder || (label ? `${label}...` : "")}
                //! Mask Props
                {...(advancedMask
                    ? { ...advancedMask, beforeMaskedValueChange: handleBeforeMaskedValueChange }
                    : { mask: mask, formatChars: defaultFormatChars })}
                {...otherProps}
            />
            {label && (
                <InputsLabel
                    label={label}
                    labelType={labelType}
                    labelClasses={labelClasses}
                    labelWidth={labelWidth}
                    isFocused={isFocused}
                    isFilled={!!_value}
                />
            )}
            {error && <InputError style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)} className="input" error={error} />}
        </div>
    );
};

export default Input;
