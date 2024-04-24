import React from "react";
import { InputLabelType, LabelPercentageWidth } from "../../../global-interfaces";

interface IInputsLabelProps {
    label: string;
    labelType: InputLabelType;
    inputClass: string;
    labelWidth: LabelPercentageWidth;

    isFocused?: boolean;
    isFilled?: boolean;

    // Dropdown Props
    dataId?: string;
}

export const InputsLabel = ({ labelType, label, inputClass, labelWidth, isFocused, isFilled, dataId }: IInputsLabelProps) => {
    const labelClasses = `${inputClass} ${labelType} ${labelType == "floating" && isFocused ? "focused" : isFilled ? "filled" : ""}`;

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
            {labelType == "floating" ? (isFocused || isFilled ? label : `${label}...`) : label}
        </label>
    );
};
