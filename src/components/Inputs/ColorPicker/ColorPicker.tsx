import classNames from "classnames";
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
    noBottomMargin = false,
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

    const handleChange = (newValue: RgbValue): void => {
        setValue(newValue);

        if (!onChange) {
            return;
        }

        switch (returnedColorType) {
            case ReturnedColor.RGB:
                return onChange({ target: { name: name || "color-picker", value: newValue } });
            case ReturnedColor.HSL:
                return onChange({ target: { name: name || "color-picker", value: rgbToHsl(newValue.r, newValue.g, newValue.b) } });
            case ReturnedColor.HEX:
                return onChange({ target: { name: name || "color-picker", value: rgbToHex(newValue.r, newValue.g, newValue.b) } });
        }
    };

    return (
        <>
            <InputContainer
                disabled={disabled}
                className="m-color-picker-container"
                size={size}
                error={error}
                noBottomMargin={noBottomMargin}
            >
                <div
                    ref={containerRef}
                    className={classNames("m-input", "m-color-preview", labelType)}
                    onClick={() => !disabled && handleOpen()}
                    style={{
                        ...getInputStyle(labelType as InputLabel, label, labelWidth, floatingInputWidth),
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
                    <InputError
                        style={getInputsErrorStyle(labelType as InputLabel, labelWidth, floatingInputWidth)}
                        className="input"
                        error={error}
                    />
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
