import React, { ChangeEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getCheckboxErrorStyle } from "../../../helpers/input-error-helpers";
import { InputsLabel } from "../_inputsComponents/InputsLabel/InputsLabel";
import { InputError } from "../_inputsComponents/InputError/InputError";
import { CheckboxProps } from "./checkbox-interfaces";

import "./Checkbox.css";

const Checkbox = ({ checked = false, name, onChange, label, error, labelType = "right", labelWidth = 30 }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    useEffect(() => {
        isChecked != checked && setIsChecked(checked);
    }, [checked]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const _checked = e.target.checked;

        onChange && onChange(e, _checked);
        setIsChecked(_checked);
    };

    const labelClasses: string = `m-checkbox-label ${labelType}`;

    const inputStyle: React.CSSProperties = {
        marginLeft: labelType == "left" ? `${labelWidth}%` : "unset",
        width: `${100 - labelWidth}%`,
    };

    return (
        <div className={`m-checkbox-container ${error ? "error" : ""}`}>
            <div style={inputStyle}>
                <label className={`m-checkbox-input-wrapper ${isChecked ? "checked" : ""}`}>
                    <input className="m-checkbox-input" type="checkbox" checked={isChecked} onChange={handleChange} name={name} />
                    <span className={`m-checkbox ${labelType}`}>
                        <FontAwesomeIcon className="m-checkbox-check-icon" icon="check" />
                    </span>
                </label>
            </div>
            {label && <InputsLabel label={label} labelType={labelType} labelClasses={labelClasses} labelWidth={labelWidth} />}
            {error && <InputError style={getCheckboxErrorStyle(labelType, labelWidth)} className="checkbox" error={error} />}
        </div>
    );
};

export default Checkbox;
