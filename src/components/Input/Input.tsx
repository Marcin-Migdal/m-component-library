import React, { ChangeEvent, useState } from "react";

import { InputProps } from "./Input-interfaces";

import "./Input.css";

//TODO! i need to make cols and rows and implement it here with input and label
export function Input({
    value = undefined,
    handleChange,
    onBlur,
    label,
    labelType = "floating",
    placeholder,
    defaultInternalValue,
    type = "text",
    autoFocus = false,
}: InputProps) {
    const [internalValue, setInternalValue] = useState<string>(defaultInternalValue || "");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const _value: string = value != undefined ? value : internalValue;

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        setIsFocused(false);

        onBlur && onBlur(e.target.value, e);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (handleChange) handleChange(e.target.value, e);
        else setInternalValue(e.target.value);
    };

    const labelClasses = `m-input-label 
    m-input-label--${labelType} ${labelType == "floating" && (isFocused || _value) ? "focused" : ""}`;

    return (
        <div className="m-input-container">
            <input
                className={`m-input ${labelType}`}
                type={type}
                value={_value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={labelType == "floating" ? undefined : placeholder || (label ? `${label}...` : "")}
                autoFocus={autoFocus}
            />
            {label && <label className={labelClasses}>{label}</label>}
        </div>
    );
}
