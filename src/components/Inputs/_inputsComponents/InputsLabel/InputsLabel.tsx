import React from "react";

import { InputLabel, LabelPercentageWidth, SimpleInputLabel } from "../../../global-types";

import "./InputsLabel.css";

type InputsLabelProps = {
    label: string;
    labelType: `${InputLabel}` | `${SimpleInputLabel}`;
    className: string;
    labelWidth: LabelPercentageWidth;

    isFocused?: boolean;
    isFilled?: boolean;
    forceFloating?: boolean;

    // Dropdown Props
    dataId?: string;
};

export const InputsLabel = ({
    labelType,
    label,
    className,
    labelWidth,
    isFocused = false,
    isFilled = false,
    forceFloating = false,
    dataId,
}: InputsLabelProps) => {
    const labelClasses = `m-input-label ${className} ${labelType} ${
        labelType == InputLabel.FLOATING && isFocused ? "focused" : isFilled ? "filled" : forceFloating ? "forced-floating" : ""
    }`;

    return (
        <label
            data-id={dataId}
            style={
                labelType == InputLabel.FLOATING
                    ? { width: `fit-content`, left: "0" }
                    : { width: `${labelWidth}%`, left: labelType == InputLabel.RIGHT ? `${`${100 - labelWidth}%`}` : "0" }
            }
            className={labelClasses}
        >
            {labelType == InputLabel.FLOATING ? (isFocused || isFilled || forceFloating ? label : `${label}...`) : label}
        </label>
    );
};
