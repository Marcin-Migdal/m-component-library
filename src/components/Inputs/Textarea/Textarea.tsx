import React, { ChangeEvent, FocusEvent, useState } from "react";

import { InputError } from "../_inputsComponents/InputError/InputError";
import { InputsLabel } from "../_inputsComponents/InputsLabel/InputsLabel";
import { getInputStyle, getInputsErrorStyle } from "../input-helpers";
import { TextareaProps } from "./Textarea-interfaces";

import "./Textarea.css";

const Textarea = ({
    value = undefined,
    name = undefined,
    onChange,
    onBlur,
    label,
    error,
    labelType = "left",
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

    return (
        <div className={`m-textarea-container ${error ? "error" : ""}`}>
            <textarea
                name={name}
                rows={row}
                style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}
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
                    inputClass="m-textarea-label"
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
