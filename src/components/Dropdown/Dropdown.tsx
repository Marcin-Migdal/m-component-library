import React, { ChangeEvent, useState } from "react";

import { DropdownProps } from "./dropdown-interfaces";

import "./Dropdown.css";

const Dropdown = ({
    value = undefined,
    handleChange,
    onBlur,
    label,
    labelType = "floating",
    placeholder,
    defaultInternalValue,
    type = "text",
    autoFocus = false,
    labelPercentageWidth = 30,
}: DropdownProps) => {
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
    m-input-label--${labelType} ${labelType == "floating" && isFocused ? "focused" : _value ? "filled" : ""}`;

    const inputStyle: React.CSSProperties = {
        marginLeft: labelType == "left" ? `${labelPercentageWidth}%` : "unset",
        width: labelType == "floating" ? "100%" : `${100 - labelPercentageWidth}%`,
    };

    return (
        <div className="m-input-container">
            <input
                style={inputStyle}
                className={`m-input ${labelType}`}
                type={type}
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
                        left: labelType == "right" ? `${`${100 - labelPercentageWidth}%`}` : "unset",
                    }}
                    className={labelClasses}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default Dropdown;
