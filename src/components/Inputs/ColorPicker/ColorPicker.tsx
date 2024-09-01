import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";

import { OpenStatus, useOpen } from "../../../hooks";
import { InputLabel, InputSize } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../helpers/getInputsErrorStyle";
import { getInputStyle } from "../helpers/getInputStyle";
import { ColorPickerPopup } from "./ColorPickerPopup/ColorPickerPopup";
import { rgbToHex, rgbToHsl, valueToRgb } from "./helpers";
import { ColorPickerProps, defaultColorPickerValue, ReturnedColor, RgbValue } from "./types";

import "./ColorPicker.css";

const ColorPicker = ({
    name = undefined,
    disabled = false,
    onChange,
    label = undefined,
    error = undefined,
    labelType = InputLabel.LEFT,
    labelWidth = 30,
    floatingInputWidth = 100,
    defaultInternalValue = defaultColorPickerValue,
    returnedColorType,
    size = InputSize.MEDIUM,
    onOpen,
    onClose,
}: ColorPickerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { openStatus, toggleOpenStatus, handleClose: handlePopupClose } = useOpen({ delay: 100 });

    const [value, setValue] = useState<RgbValue>(valueToRgb(defaultInternalValue));

    const handleOpen = () => {
        onOpen && onOpen();
        toggleOpenStatus();
    };

    const handleClose = () => {
        if (onClose) {
            switch (returnedColorType) {
                case ReturnedColor.RGB:
                    onClose(value);
                    break;
                case ReturnedColor.HSL:
                    onClose(rgbToHsl(value.r, value.g, value.b));
                    break;
                case ReturnedColor.HEX:
                    onClose(rgbToHex(value.r, value.g, value.b));
                    break;
            }
        }

        handlePopupClose();
    };

    const handleChange = (value: RgbValue): void => {
        setValue(value);

        if (!onChange) {
            return;
        }

        switch (returnedColorType) {
            case ReturnedColor.RGB:
                return onChange({ target: { name: name || "color-picker", value: value } });
            case ReturnedColor.HSL:
                return onChange({ target: { name: name || "color-picker", value: rgbToHsl(value.r, value.g, value.b) } });
            case ReturnedColor.HEX:
                return onChange({ target: { name: name || "color-picker", value: rgbToHex(value.r, value.g, value.b) } });
        }
    };

    return (
        <>
            <InputContainer disabled={disabled} className="m-color-picker-container" size={size} error={error}>
                <div
                    ref={containerRef}
                    className={`m-input m-color-preview ${labelType}`}
                    onClick={() => !disabled && handleOpen()}
                    style={{
                        ...getInputStyle(labelType, label, labelWidth, floatingInputWidth),
                        backgroundColor: `rgb(${value.r}, ${value.g}, ${value.b})`,
                    }}
                />
                {label && (
                    <InputsLabel
                        label={label}
                        labelType={labelType}
                        className="color-picker"
                        labelWidth={labelWidth}
                        forceFloating={labelType === InputLabel.FLOATING}
                    />
                )}
                {error && (
                    <InputError style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)} className="input" error={error} />
                )}
            </InputContainer>
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
