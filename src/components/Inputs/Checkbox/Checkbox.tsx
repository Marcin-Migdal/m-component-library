import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useEffect, useState } from "react";

import { InputError } from "../_inputsComponents/InputError/InputError";
import { InputsLabel } from "../_inputsComponents/InputsLabel/InputsLabel";
import { getCheckboxErrorStyle, getInputStyle } from "../input-helpers";
import { CheckboxProps } from "./checkbox-interfaces";

import "./Checkbox.css";

const Checkbox = ({
    checked = false,
    name,
    onChange,
    label,
    error,
    labelType = "left",
    labelWidth = 30,
    size = "small",
    ...otherProps
}: CheckboxProps) => {
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
        <div className={`m-checkbox-container ${size} ${error ? "error" : ""}`}>
            <div style={getInputStyle(labelType, label, labelWidth, undefined)}>
                <label className={`m-checkbox-input-wrapper ${isChecked ? "checked" : ""}`}>
                    <input
                        className="m-checkbox-input"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleChange}
                        name={name}
                        {...otherProps}
                    />
                    <span className={`m-checkbox ${labelType}`}>
                        <FontAwesomeIcon className="m-checkbox-check-icon" icon="check" />
                    </span>
                </label>
            </div>
            {label && <InputsLabel label={label} labelType={labelType} className="m-input-label" labelWidth={labelWidth} />}
            {error && <InputError style={getCheckboxErrorStyle(labelType, labelWidth)} className="checkbox" error={error} />}
        </div>
    );
};

export default Checkbox;
