import InputMask, { InputState } from "react-input-mask";
import React, { ChangeEvent, useState } from "react";

import { CUSTOM_INPUT_MASKS, InputProps } from "./Input-interfaces";

import "./Input.css";

const Input = (props: InputProps) => {
    const {
        value = undefined,
        name = undefined,
        handleChange,
        onBlur,
        label,
        labelType = "floating",
        placeholder,
        defaultInternalValue,
        type = "text",
        autoFocus = false,
        labelPercentageWidth = 30,
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

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        setIsFocused(false);

        onBlur && onBlur(e, e.target.value);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        handleChange && handleChange(e, e.target.value);
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

    const inputStyle: React.CSSProperties = {
        marginLeft: labelType == "left" ? `${labelPercentageWidth}%` : "unset",
        width: labelType == "floating" ? "100%" : `${100 - labelPercentageWidth}%`,
    };

    return (
        <div className="m-input-container">
            <InputMask
                name={name}
                mask={mask}
                formatChars={formatChars}
                className={`m-input ${labelType}`}
                type={type}
                style={inputStyle}
                value={_value}
                onChange={onChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                autoFocus={autoFocus}
                placeholder={labelType == "floating" ? undefined : placeholder || (label ? `${label}...` : "")}
                beforeMaskedValueChange={handleBeforeMaskedValueChange}
            />
            {label && (
                <label
                    style={{
                        width: `${labelPercentageWidth}%`,
                        left: labelType == "right" ? `${`${100 - labelPercentageWidth}%`}` : "0",
                    }}
                    className={labelClasses}
                >
                    {labelType == "floating" ? (isFocused || _value ? label : `${label}...`) : label}
                </label>
            )}
        </div>
    );
};

export default Input;
