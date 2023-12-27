import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useState } from "react";

import { InputsLabel } from "../InputsLabel/InputsLabel";
import { TextareaProps } from "./Textarea-interfaces";
import { Tooltip } from "../Tooltip";

import "./Textarea.css";

const Textarea = ({
    value = undefined,
    name = undefined,
    onChange,
    onBlur,
    label,
    error,
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
        <div className={`m-textarea-container ${error ? "error" : ""}`}>
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
                <Tooltip text="error" position="right" className="textarea-error">
                    <FontAwesomeIcon icon="exclamation-circle" />
                </Tooltip>
            )}
        </div>
    );
};

export default Textarea;
