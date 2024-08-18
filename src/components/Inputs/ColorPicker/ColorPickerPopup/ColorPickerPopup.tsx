import React, { ChangeEvent, useLayoutEffect, useRef, useState } from "react";

import { getPosition } from "../../../../helpers/getPosition";
import { Position } from "../../../../helpers/getPosition/getPosition-types";
import { OpenStatus } from "../../../../hooks";
import Textfield from "../../Textfield";
import { ADVANCED_MASKS_CONFIGS } from "../../Textfield/internal-helpers";
import { RgbValue } from "../ColorPicker-interfaces";
import { ColorPickerCanvas } from "../ColorPickerCanvas/ColorPickerCanvas";
import { hslToRgb, rgbToHsl } from "../helpers";
import { HueSliderCanvas } from "../HueSliderCanvas/HueSliderCanvas";

import "./ColorPickerPopup.css";

type ColorPickerPopupProps = {
    value: RgbValue;
    onChange: (value: RgbValue) => void;
    parentElement: HTMLDivElement | null;
    className: OpenStatus;
    handleClose: () => void;
};

export const ColorPickerPopup = ({ value, onChange, parentElement, className, handleClose }: ColorPickerPopupProps) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<Position | undefined>(undefined);

    const [hueSliderValue, setHueSliderValue] = useState<number>(rgbToHsl(value.r, value.g, value.b).h);
    const [rgbValue, setRgbValue] = useState<RgbValue>({ ...value });

    useLayoutEffect(() => {
        const calculatePopupPosition = () => {
            setPosition(getPosition(parentElement, popupRef.current));
        };

        const handleClickOutside = (event: MouseEvent) => {
            const target: HTMLElement = event.target as HTMLElement;

            if (!popupRef.current || !parentElement) return;
            if (!popupRef.current.contains(target) && !parentElement.contains(target)) {
                handleClose();
            }
        };

        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.code == "Escape") handleClose();
        };

        const resizeObserver = new ResizeObserver(calculatePopupPosition);
        resizeObserver.observe(document.body);

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyPress);

        return () => {
            resizeObserver.disconnect();

            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    const handleColorPick = (rgb: RgbValue) => {
        setRgbValue(rgb);

        onChange(rgbValue);
    };

    const handleHueSliderChange = (hue: number) => {
        const { s, l } = rgbToHsl(rgbValue.r, rgbValue.g, rgbValue.b);

        setHueSliderValue(hue);
        setRgbValue(hslToRgb(hue, s, l));

        onChange(rgbValue);
    };

    const handleRgbTextfieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newRgbValue: RgbValue = { ...rgbValue, [name as keyof RgbValue]: parseInt(value) };

        setRgbValue(newRgbValue);
        setHueSliderValue(rgbToHsl(newRgbValue.r, newRgbValue.g, newRgbValue.b).h);

        onChange(rgbValue);
    };

    return (
        <div ref={popupRef} className={`color-picker-popup ${className}`} style={{ ...position }}>
            <ColorPickerCanvas value={rgbValue} hue={hueSliderValue} onChange={handleColorPick} />
            <div className="middle-section">
                <div className="color-preview" style={{ backgroundColor: `rgb(${rgbValue.r},${rgbValue.g},${rgbValue.b})` }} />
                <HueSliderCanvas hue={hueSliderValue} onChange={handleHueSliderChange} />
            </div>
            <div className="bottom-section">
                <Textfield
                    value={rgbValue.r.toString()}
                    advancedMask={ADVANCED_MASKS_CONFIGS.RGB}
                    name="r"
                    label="R"
                    placeholder=" "
                    labelWidth={20}
                    onChange={handleRgbTextfieldChange}
                />
                <Textfield
                    value={rgbValue.g.toString()}
                    advancedMask={ADVANCED_MASKS_CONFIGS.RGB}
                    name="g"
                    label="G"
                    placeholder=" "
                    labelWidth={20}
                    onChange={handleRgbTextfieldChange}
                />
                <Textfield
                    value={rgbValue.b.toString()}
                    advancedMask={ADVANCED_MASKS_CONFIGS.RGB}
                    name="b"
                    label="B"
                    placeholder=" "
                    labelWidth={20}
                    onChange={handleRgbTextfieldChange}
                />
            </div>
        </div>
    );
};
