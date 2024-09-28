import React, { ChangeEvent, FocusEvent, useState } from "react";

import { InputLabel, InputSize } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../helpers/getInputsErrorStyle";
import { getInputStyle } from "../helpers/getInputStyle";
import { TextareaProps } from "./types";

import "./Textarea.css";

const Textarea = ({
    value: externalValue = undefined,
    name = undefined,
    onChange,
    onBlur,
    label,
    error,
    labelType = InputLabel.LEFT,
    placeholder,
    defaultInternalValue,
    autoFocus = false,
    labelWidth = 30,
    floatingInputWidth = 100,
    row = 4,
    size = InputSize.MEDIUM,
    disabled = false,
    ...otherProps
}: TextareaProps) => {
    const [internalValue, setInternalValue] = useState<string>(defaultInternalValue || "");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const value: string = externalValue !== undefined ? externalValue : internalValue;

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
        <InputContainer disabled={disabled} className="m-textarea-container" size={size} error={error}>
            <textarea
                name={name}
                rows={row}
                style={getInputStyle(labelType as InputLabel, label, labelWidth, floatingInputWidth)}
                className={`m-input m-textarea ${labelType}`}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={labelType === InputLabel.FLOATING ? undefined : placeholder || (label ? `${label}...` : "")}
                autoFocus={autoFocus}
                disabled={disabled}
                {...otherProps}
            />
            {label && (
                <InputsLabel
                    label={label}
                    labelType={labelType}
                    className="textarea"
                    labelWidth={labelWidth}
                    isFocused={isFocused}
                    isFilled={!!value}
                />
            )}
            {error && (
                <InputError
                    style={getInputsErrorStyle(labelType as InputLabel, labelWidth, floatingInputWidth)}
                    className="textarea"
                    error={error}
                />
            )}
        </InputContainer>
    );
};

export default Textarea;
