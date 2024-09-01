import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import { InputSize, SimpleInputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getCheckboxErrorStyle } from "../helpers/getCheckboxErrorStyle";
import { getInputStyle } from "../helpers/getInputStyle";
import { CheckboxProps } from "./types";

import "./Checkbox.css";

const Checkbox = ({
    checked = false,
    name,
    onChange,
    label,
    error,
    labelType = SimpleInputLabel.LEFT,
    labelWidth = 30,
    size = InputSize.MEDIUM,
    disabled = false,
    ...otherProps
}: CheckboxProps) => {
    const checkboxContainerRef = useRef<HTMLDivElement>(null);
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    useEffect(() => {
        isChecked != checked && setIsChecked(checked);
    }, [checked]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const _checked = e.target.checked;

        onChange && onChange(e, _checked);
        setIsChecked(_checked);
    };

    return (
        <InputContainer disabled={disabled} ref={checkboxContainerRef} className="m-checkbox-container" size={size} error={error}>
            <div style={getInputStyle(labelType, label, labelWidth, undefined)}>
                <label className={`m-checkbox-input-wrapper ${isChecked ? "checked" : ""}`}>
                    <input
                        className="m-checkbox-input"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleChange}
                        name={name}
                        disabled={disabled}
                        {...otherProps}
                    />
                    <span className={`m-input m-checkbox ${labelType}`}>
                        <FontAwesomeIcon className="m-checkbox-check-icon" icon="check" />
                    </span>
                </label>
            </div>
            {label && <InputsLabel label={label} labelType={labelType} className="m-input-label" labelWidth={labelWidth} />}
            {error && checkboxContainerRef.current && (
                <InputError
                    style={getCheckboxErrorStyle(checkboxContainerRef.current, labelType, labelWidth)}
                    className="checkbox"
                    error={error}
                />
            )}
        </InputContainer>
    );
};

export default Checkbox;
