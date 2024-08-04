import React, { useRef, useState } from "react";

import { createPortal } from "react-dom";
import { OpenStatus, useOpen } from "../../../hooks";
import { InputError } from "../_inputsComponents/InputError/InputError";
import { InputsLabel } from "../_inputsComponents/InputsLabel/InputsLabel";
import { getInputsErrorStyle, getInputStyle } from "../input-helpers";
import { ColorPickerProps, ColorType } from "./ColorPicker-interfaces";
import { ColorPickerPopup } from "./ColorPickerPopup/ColorPickerPopup";

import "./ColorPicker.css";

const ColorPicker = ({
    value: externalValue = undefined,
    name = undefined,
    disabled = false,
    onChange,
    label = undefined,
    error = undefined,
    labelType = "left",
    labelWidth = 30,
    floatingInputWidth = 100,
    defaultInternalValue = "red",
    size = "medium",
}: ColorPickerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { openStatus, toggleOpenStatus } = useOpen({ delay: 100 });

    const [internalValue, setInternalValue] = useState<ColorType | undefined>(defaultInternalValue);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const value: ColorType | undefined = externalValue != undefined ? externalValue : internalValue;

    const handleFocus = () => setIsFocused(true);

    const handleChange = (value: ColorType): void => {
        onChange && onChange({ target: { name: name || "color-picker", value: value } });
        setInternalValue(value);
    };

    return (
        <>
            <div className={`m-color-picker-container ${size} ${error ? "error" : ""}`}>
                <div
                    ref={containerRef}
                    className={`m-input m-color-preview ${labelType}`}
                    onClick={toggleOpenStatus}
                    style={{
                        ...getInputStyle(labelType, label, labelWidth, undefined),
                        backgroundColor: value || "var(--input-background-color)",
                    }}
                />
                {label && (
                    <InputsLabel
                        label={label}
                        labelType={labelType}
                        className="color-picker"
                        labelWidth={labelWidth}
                        isFocused={isFocused}
                        isFilled={!!value}
                    />
                )}
                {error && (
                    <InputError style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)} className="input" error={error} />
                )}
            </div>
            {containerRef.current &&
                openStatus !== OpenStatus.CLOSED &&
                createPortal(
                    <ColorPickerPopup value={value} onChange={handleChange} className={openStatus} parentElement={containerRef.current} />,
                    document.getElementById("wrapper-root") as HTMLElement
                )}
        </>
    );
};

export default ColorPicker;
