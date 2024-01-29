import React from "react";
import { FloatingInputWidth, InputLabelType, LabelPercentageWidth } from "../../../global-interfaces";

interface IInputsLabelProps {
    label: string;
    labelType: InputLabelType;
    labelClasses: string;
    labelWidth: LabelPercentageWidth;

    isFocused?: boolean;
    isFilled?: boolean;

    // Dropdown Props
    dataId?: string;
}

export const InputsLabel = ({ labelType, label, labelClasses, labelWidth, isFocused, isFilled, dataId }: IInputsLabelProps) => {
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
