import React, { ChangeEvent, useState, FocusEvent } from "react";

import { getInputsErrorStyle } from "../../../helpers/input-error-helpers";
import { InputsLabel } from "../_inputsComponents/InputsLabel/InputsLabel";
import { InputError } from "../_inputsComponents/InputError/InputError";
import { TextareaProps } from "./Textarea-interfaces";

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
    ...otherProps
}: TextareaProps) => {
    const [internalValue, setInternalValue] = useState<string>(defaultInternalValue || "");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const _value: string = value != undefined ? value : internalValue;

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(false);

        onBlur && onBlur(e, e.target.value);
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        onChange && onChange(e, e.target.value);
        setInternalValue(e.target.value);
    };

    const labelClasses = `m-textarea-label ${labelType} ${labelType == "floating" && isFocused ? "focused" : _value ? "filled" : ""}`;

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
                {...otherProps}
            />
            {label && (
                <InputsLabel
                    label={label}
                    labelType={labelType}
                    labelClasses={labelClasses}
                    labelWidth={labelWidth}
                    isFocused={isFocused}
                    isFilled={!!_value}
                />
            )}
            {error && (
                <InputError style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)} className="textarea" error={error} />
            )}
        </div>
    );
};

export default Textarea;
