import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useEffect, useState } from "react";

import { InputsLabel } from "../InputsLabel/InputsLabel";
import { CheckboxProps } from "./checkbox-interfaces";
import Tooltip from "../Tooltip";

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
        <div className="m-checkbox-container ">
            <div style={inputStyle}>
                <label className={`m-checkbox-input-wrapper ${isChecked ? "checked" : ""}`}>
                    <input className="m-checkbox-input" type="checkbox" checked={isChecked} onChange={handleChange} name={name} />
                    <span className={`m-checkbox ${labelType}`}>
                        <FontAwesomeIcon className="m-checkbox-check-icon" icon="check" />
                    </span>
                </label>
            </div>
            {label && <InputsLabel label={label} labelType={labelType} labelClasses={labelClasses} labelWidth={labelWidth} />}
            {/* {error && (
                <Tooltip
                    tooltipContent={error}
                    position="left"
                    className="checkbox-error"
                    style={{ left: labelType == "left" ? `${labelWidth}%` : "unset" }}
                >
                    <FontAwesomeIcon icon="exclamation-circle" />
                </Tooltip>
            )} */}
        </div>
    );
};

export default Checkbox;
