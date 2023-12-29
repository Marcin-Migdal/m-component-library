import React, { CSSProperties, ChangeEvent, useState, FocusEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputMask, { InputState } from "react-input-mask";

import { CUSTOM_INPUT_MASKS, InputProps } from "./Input-interfaces";
import { InputsLabel } from "../InputsLabel/InputsLabel";
import Tooltip from "../Tooltip";

import "./Input.css";

const Input = (props: InputProps) => {
    const {
        value = undefined,
        name = undefined,
        disabled = false,
        onChange,
        onBlur,
        label,
        error,
        labelType = "floating",
        placeholder,
        labelWidth = 30,
        floatingInputWidth = 100,
        defaultInternalValue,
        type = "text",
        autoFocus = false,
        customMask = undefined,
        onBeforeMaskedValueChange = undefined,
    } = props;

    let { mask = "", formatChars = undefined } = props;

    if (customMask == CUSTOM_INPUT_MASKS.TIME) {
        mask = "12:34";
        formatChars = {
            "1": "[0-2]",
            "2": "[0-9]",
            "3": "[0-5]",
            "4": "[0-9]",
        };
    }

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

    const handleBeforeMaskedValueChange = (newState: InputState, oldState: InputState, userInput: string): InputState => {
        if (onBeforeMaskedValueChange) {
            return onBeforeMaskedValueChange(newState, oldState, userInput);
        }

        let { value: newValue, selection: newSelection } = newState;
        let { value: oldValue, selection: oldSelection } = oldState;

        switch (CUSTOM_INPUT_MASKS.TIME) {
            case "time":
                // Conditional mask for the 2nd digit base on the first digit
                if (newValue.startsWith("2")) formatChars["2"] = "[0-3]";
                // To block 24, 25, etc.
                else formatChars["2"] = "[0-9]"; // To allow 05, 12, etc.
                return { value: newValue, selection: newSelection };
            default:
                return { value: newValue, selection: newSelection };
        }
    };

    const labelClasses = `m-input-label 
    m-input-label--${labelType} ${labelType == "floating" && isFocused ? "focused" : _value ? "filled" : ""}`;

    const inputStyle: CSSProperties = {
        marginLeft: labelType == "left" ? `${labelWidth}%` : "unset",
        width: labelType == "floating" ? `${floatingInputWidth}%` : `${100 - labelWidth}%`,
    };

    return (
        <div className={`m-input-container ${error ? "error" : ""}`}>
            <InputMask
                disabled={disabled}
                name={name}
                mask={mask}
                formatChars={formatChars}
                className={`m-input ${labelType}`}
                type={type}
                style={inputStyle}
                value={_value}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                autoFocus={autoFocus}
                placeholder={labelType == "floating" ? undefined : placeholder || (label ? `${label}...` : "")}
                beforeMaskedValueChange={handleBeforeMaskedValueChange}
            />
            {label && (
                <InputsLabel
                    label={label}
                    labelType={labelType}
                    labelClasses={labelClasses}
                    floatingInputWidth={floatingInputWidth}
                    labelWidth={labelWidth}
                    isFocused={isFocused}
                    _value={_value}
                />
            )}
            {error && (
                <Tooltip tooltipContent={error} position="left" className="input-error">
                    <FontAwesomeIcon icon="exclamation-circle" />
                </Tooltip>
            )}
        </div>
    );
};

export default Input;

// TODO! dodać czerwoną obramówkę inputa jak jest error
