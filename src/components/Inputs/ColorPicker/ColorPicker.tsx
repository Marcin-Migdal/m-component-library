import React, { useRef, useState } from "react";

import { createPortal } from "react-dom";
import { OpenStatus, useOpen } from "../../../hooks";
import { InputError } from "../_inputsComponents/InputError/InputError";
import { InputsLabel } from "../_inputsComponents/InputsLabel/InputsLabel";
import { getInputsErrorStyle, getInputStyle } from "../input-helpers";
import { ColorPickerProps, defaultColorValue, ReturnedColorType, RgbValue } from "./ColorPicker-interfaces";
import { ColorPickerPopup } from "./ColorPickerPopup/ColorPickerPopup";
import { rgbToHex, rgbToHsl, valueToRgb } from "./helpers";

import "./ColorPicker.css";

const ColorPicker = ({
    name = undefined,
    disabled = false,
    onChange,
    label = undefined,
    error = undefined,
    labelType = "left",
    labelWidth = 30,
    floatingInputWidth = 100,
    defaultInternalValue = defaultColorValue,
    returnedColorType,
    size = "medium",
}: ColorPickerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { openStatus, toggleOpenStatus, handleClose: handlePopupClose } = useOpen({ delay: 100 });

    const [value, setValue] = useState<RgbValue>(valueToRgb(defaultInternalValue));
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => setIsFocused(true);

    const handleClose = () => {
        handlePopupClose();
    };

    const handleChange = (value: RgbValue): void => {
        setValue(value);

        if (!onChange) {
            return;
        }

        switch (returnedColorType) {
            case ReturnedColorType.RGB:
                return onChange({ target: { name: name || "color-picker", value: value } });
            case ReturnedColorType.HSL:
                return onChange({ target: { name: name || "color-picker", value: rgbToHsl(value.r, value.g, value.b) } });
            case ReturnedColorType.HEX:
                return onChange({ target: { name: name || "color-picker", value: rgbToHex(value.r, value.g, value.b) } });
        }
    };

    return (
        <>
            <div className={`m-color-picker-container ${size} ${error ? "error" : ""}`}>
                <div
                    ref={containerRef}
                    className={`m-input m-color-preview ${labelType}`}
                    onFocus={handleFocus}
                    onClick={() => !disabled && toggleOpenStatus()}
                    style={{
                        ...getInputStyle(labelType, label, labelWidth, undefined),
                        backgroundColor: `rgb(${value.r}, ${value.g}, ${value.b})`,
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
                    <ColorPickerPopup
                        value={value}
                        onChange={handleChange}
                        className={openStatus}
                        parentElement={containerRef.current}
                        handleClose={handleClose}
                    />,
                    document.body
                )}
        </>
    );
};

export default ColorPicker;
