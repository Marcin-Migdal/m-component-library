import React, { ChangeEvent, useState } from "react";

import { TextareaProps } from "./Textarea-interfaces";

import "./Textarea.css";

const Textarea = ({
    value = undefined,
    name = undefined,
    handleChange,
    onBlur,
    label,
    labelType = "floating",
    placeholder,
    defaultInternalValue,
    autoFocus = false,
    labelPercentageWidth = 30,
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

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        handleChange && handleChange(e, e.target.value);
        setInternalValue(e.target.value);
    };

    const labelClasses = `m-textarea-label 
    m-textarea-label--${labelType} ${labelType == "floating" && isFocused ? "focused" : _value ? "filled" : ""}`;

    const inputStyle: React.CSSProperties = {
        marginLeft: labelType == "left" ? `${labelPercentageWidth}%` : "unset",
        width: labelType == "floating" ? "100%" : `${100 - labelPercentageWidth}%`,
    };

    return (
        <div className="m-textarea-container">
            <textarea
                name={name}
                rows={row}
                style={inputStyle}
                className={`m-textarea ${labelType}`}
                value={_value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={labelType == "floating" ? undefined : placeholder || (label ? `${label}...` : "")}
                autoFocus={autoFocus}
            />
            {label && (
                <label
                    style={{
                        width: `${labelPercentageWidth}%`,
                        left: labelType == "right" ? `${`${100 - labelPercentageWidth}%`}` : "0",
                    }}
                    className={labelClasses}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default Textarea;
