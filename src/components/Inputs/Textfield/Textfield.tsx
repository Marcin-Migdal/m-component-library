import React, { ChangeEvent, FocusEvent, useState } from "react";
import InputMask, { InputState } from "react-input-mask";

import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputStyle, getInputsErrorStyle } from "../input-helpers";
import { AdvancedMaskType, TextfieldProps } from "./Textfield-interfaces";

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
        onChange,
        onBlur,
        label = undefined,
        error = undefined,
        labelType = "left",
        placeholder = undefined,
        labelWidth = 30,
        floatingInputWidth = 100,
        defaultInternalValue,
        type = "text",
        autoFocus = false,
        mask = "",
        advancedMask = undefined,
        size = "medium",
        ...otherProps
    } = props;

    const [internalValue, setInternalValue] = useState<string>(defaultInternalValue || "");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const value: string = externalValue != undefined ? externalValue : internalValue;

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);

        onBlur && onBlur(e, e.target.value);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange && onChange(e, e.target.value);
        setInternalValue(e.target.value);
    };

    const handleBeforeMaskedValueChange =
        (advancedMask: AdvancedMaskType) =>
        (newState: InputState, oldState: InputState, userInput: string): InputState => {
            if (!advancedMask.beforeChange) return newState;

            return advancedMask.beforeChange(newState, oldState, userInput, advancedMask.formatChars);
        };

    return (
        <InputContainer disabled={disabled} className="m-textfield-container" size={size} error={error}>
            <InputMask
                maskChar={null}
                disabled={disabled}
                name={name}
                className={`m-input m-textfield ${labelType}`}
                type={type}
                style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                autoFocus={autoFocus}
                placeholder={labelType == "floating" ? undefined : placeholder || (label ? `${label}...` : "")}
                //! Mask Props
                {...(advancedMask
                    ? { ...advancedMask, beforeMaskedValueChange: handleBeforeMaskedValueChange(advancedMask) }
                    : { mask: mask, formatChars: defaultFormatChars })}
                {...otherProps}
            />
            {label && (
                <InputsLabel
                    label={label}
                    labelType={labelType}
                    className="textfield"
                    labelWidth={labelWidth}
                    isFocused={isFocused}
                    isFilled={!!value}
                />
            )}
            {error && <InputError style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)} className="input" error={error} />}
        </InputContainer>
    );
};

export default Textfield;
