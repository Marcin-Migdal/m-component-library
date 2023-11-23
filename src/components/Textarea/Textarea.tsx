import React, { ChangeEvent, useState } from "react";

import { TextareaProps } from "./Textarea-interfaces";

import "./Textarea.css";

export const Textarea = ({
    value = undefined,
    name = undefined,
    onChange,
    onBlur,
    label,
    labelType = "floating",
    placeholder,
    defaultInternalValue,
    autoFocus = false,
    labelWidth = 30,
    floatingInputWidth = 100,
    row = 4,
}: TextareaProps) => {
    const [internalValue, setInternalValue] = useState<string>(defaultInternalValue || "");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const _value: string = value != undefined ? value : internalValue;

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setIsFocused(false);

        onBlur && onBlur(e, e.target.value);
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        onChange && onChange(e, e.target.value);
        setInternalValue(e.target.value);
    };

    const labelClasses = `m-textarea-label 
    m-textarea-label--${labelType} ${labelType == "floating" && isFocused ? "focused" : _value ? "filled" : ""}`;

    const inputStyle: React.CSSProperties = {
        marginLeft: labelType == "left" ? `${labelWidth}%` : "unset",
        width: labelType == "floating" ? `${floatingInputWidth}%` : `${100 - labelWidth}%`,
    };

    return (
        <div className="m-textarea-container">
            <textarea
                name={name}
                rows={row}
                style={inputStyle}
                className={`m-textarea ${labelType}`}
                value={_value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={labelType == "floating" ? undefined : placeholder || (label ? `${label}...` : "")}
                autoFocus={autoFocus}
            />
            {label && (
                <label
                    style={{
                        width: `${labelWidth}%`,
                        left: labelType == "right" ? `${`${100 - labelWidth}%`}` : "0",
                    }}
                    className={labelClasses}
                >
                    {labelType == "floating" ? (isFocused || _value ? label : `${label}...`) : label}
                </label>
            )}
        </div>
    );
};
