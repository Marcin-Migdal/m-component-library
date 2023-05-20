import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useEffect, useState } from "react";

import { CheckboxProps } from "./checkbox-interfaces";

import "./Checkbox.css";

const Checkbox = ({ checked = false, name, onChange, label, labelType = "right", labelPercentageWidth = 30 }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    useEffect(() => {
        isChecked != checked && setIsChecked(checked);
    }, [checked]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const _checked = e.target.checked;

        onChange && onChange(e, _checked);
        setIsChecked(_checked);
    };

    const inputStyle: React.CSSProperties = {
        marginLeft: labelType == "left" ? `${labelPercentageWidth}%` : "unset",
        width: `${100 - labelPercentageWidth}%`,
    };

    return (
        <div className="m-checkbox-container">
            <div style={inputStyle}>
                <label className={`m-checkbox-input-wrapper ${isChecked ? "checked" : ""}`}>
                    <input className="m-checkbox-input" type="checkbox" checked={isChecked} onChange={handleChange} name={name} />
                    <span className={`m-checkbox ${labelType}`}>
                        <FontAwesomeIcon className="m-checkbox-check-icon" icon="check" />
                    </span>
                </label>
            </div>

            {label && (
                <label
                    style={{
                        width: `${labelPercentageWidth}%`,
                        left: labelType == "right" ? `${`${100 - labelPercentageWidth}%`}` : "unset",
                    }}
                    className={`m-checkbox-label ${labelType}`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default Checkbox;
