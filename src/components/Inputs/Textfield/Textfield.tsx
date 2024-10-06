import classNames from "classnames";
import React, { ChangeEvent, FocusEvent, useState } from "react";
import InputMask, { InputState } from "react-input-mask";

import { InputLabel, InputSize } from "../../global-types";
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
        size = InputSize.MEDIUM,
        noBottomMargin = false,
        ...otherProps
    } = props;

    const [internalValue, setInternalValue] = useState<string>(defaultInternalValue || "");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const value: string = externalValue !== undefined ? externalValue : internalValue;

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);

        onBlur && onBlur(e, e.target.value);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange && onChange(e, e.target.value);
        setInternalValue(e.target.value);
    };

    const handleBeforeMaskedValueChange = (newState: InputState, oldState: InputState, userInput: string): InputState => {
        if (!advancedMask) {
            return newState;
        }

        if (!advancedMask.beforeChange) {
            return newState;
        }

        return advancedMask.beforeChange(newState, oldState, userInput, advancedMask.formatChars);
    };

    return (
        <InputContainer disabled={disabled} className="m-textfield-container" size={size} error={error} noBottomMargin={noBottomMargin}>
            <InputMask
                readOnly={readOnly}
                maskChar={null}
                disabled={disabled}
                name={name}
                className={classNames("m-input", "m-textfield", labelType)}
                type={type}
                style={getInputStyle(labelType as InputLabel, label, labelWidth, floatingInputWidth)}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                autoFocus={autoFocus}
                placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
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
                    isFilled={!!value}
                />
            )}
            {error && (
                <InputError
                    style={getInputsErrorStyle(labelType as InputLabel, labelWidth, floatingInputWidth)}
                    className="input"
                    error={error}
                />
            )}
        </InputContainer>
    );
};

export default Textfield;
