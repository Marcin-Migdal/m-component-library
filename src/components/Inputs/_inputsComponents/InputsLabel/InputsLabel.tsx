import classNames from "classnames";
import React, { useMemo } from "react";

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
    const inputLabelStyle = useMemo(() => {
        if (labelType === InputLabel.FLOATING) {
            return { width: `fit-content`, left: "0" };
        }

        return { width: `${labelWidth}%`, left: labelType === InputLabel.RIGHT ? `${`${100 - labelWidth}%`}` : "0" };
    }, [labelType, labelWidth]);

    const inputLabel = useMemo(() => {
        if (labelType === InputLabel.FLOATING) {
            if (isFocused || isFilled || forceFloating) {
                return label;
            }

            return `${label}...`;
        }

        return label;
    }, [labelType, isFocused, isFilled, forceFloating, label]);

    return (
        <label
            data-id={dataId}
            style={inputLabelStyle}
            className={classNames("m-input-label", labelType, className, {
                focused: labelType === InputLabel.FLOATING && isFocused,
                filled: isFilled,
                "forced-floating": forceFloating,
            })}
        >
            {inputLabel}
        </label>
    );
};
