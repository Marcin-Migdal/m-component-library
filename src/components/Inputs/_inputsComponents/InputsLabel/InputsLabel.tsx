import React from "react";
import { FloatingInputWidth, InputLabelType, LabelPercentageWidth } from "../../../global-interfaces";

interface IInputsLabelProps {
    label: string;
    labelType: InputLabelType;
    labelClasses: string;
    labelWidth: LabelPercentageWidth;

    floatingInputWidth?: FloatingInputWidth;
    isFocused?: boolean;
    _value?: string;

    // Dropdown Props
    dataId?: string;
}

export const InputsLabel = ({
    labelType,
    label,
    labelClasses,
    floatingInputWidth,
    labelWidth,
    isFocused,
    _value,
    dataId,
}: IInputsLabelProps) => {
    return (
        <label
            data-id={dataId}
            style={
                labelType == "floating"
                    ? { width: `${floatingInputWidth}%`, left: "0" }
                    : { width: `${labelWidth}%`, left: labelType == "right" ? `${`${100 - labelWidth}%`}` : "0" }
            }
            className={labelClasses}
        >
            {labelType == "floating" ? (isFocused || _value ? label : `${label}...`) : label}
        </label>
    );
};
