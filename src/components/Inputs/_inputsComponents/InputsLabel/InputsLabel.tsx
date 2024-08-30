import React from "react";

import { InputLabelType, LabelPercentageWidth } from "../../../global-interfaces";

import "./InputsLabel.css";

interface IInputsLabelProps {
    label: string;
    labelType: InputLabelType;
    className: string;
    labelWidth: LabelPercentageWidth;

    isFocused?: boolean;
    isFilled?: boolean;
    forceFloating?: boolean;

    // Dropdown Props
    dataId?: string;
}

export const InputsLabel = ({
    labelType,
    label,
    className,
    labelWidth,
    isFocused = false,
    isFilled = false,
    forceFloating = false,
    dataId,
}: IInputsLabelProps) => {
    const labelClasses = `m-input-label ${className} ${labelType} ${
        labelType == "floating" && isFocused ? "focused" : isFilled ? "filled" : forceFloating ? "forced-floating" : ""
    }`;

    className === "slider" && console.log(labelClasses);
    return (
        <label
            data-id={dataId}
            style={
                labelType == "floating"
                    ? { width: `fit-content`, left: "0" }
                    : { width: `${labelWidth}%`, left: labelType == "right" ? `${`${100 - labelWidth}%`}` : "0" }
            }
            className={labelClasses}
        >
            {labelType == "floating" ? (isFocused || isFilled || forceFloating ? label : `${label}...`) : label}
        </label>
    );
};
