import React, { ChangeEvent, FocusEvent, useState } from "react";
import InputMask, { InputState } from "react-input-mask";

import { InputError } from "../_inputsComponents/InputError/InputError";
import { InputsLabel } from "../_inputsComponents/InputsLabel/InputsLabel";
import { getInputStyle, getInputsErrorStyle } from "../input-helpers";
import { TextfieldProps } from "./Textfield-interfaces";

import "./Textfield.css";

const defaultFormatChars = {
    "9": "[0-9]",
    a: "[A-Za-z]",
    "*": "[A-Za-z0-9]",
};

const Textfield = (props: TextfieldProps) => {
    const {
        value = undefined,
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
        size = "small",
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

    return (
        <div className={`m-textfield-container ${size} ${error ? "error" : ""}`}>
            <InputMask
                disabled={disabled}
                name={name}
                className={`m-textfield ${labelType}`}
                type={type}
                style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}
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
                    className="textfield"
                    labelWidth={labelWidth}
                    isFocused={isFocused}
                    isFilled={!!_value}
                />
            )}
            {error && <InputError style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)} className="input" error={error} />}
        </div>
    );
};

export default Textfield;
