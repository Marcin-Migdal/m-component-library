import React, { ChangeEvent, useLayoutEffect, useRef, useState } from "react";

import { getPosition } from "../../../../helpers/getPosition";
import { GetPositionResponse } from "../../../../helpers/getPosition/getPosition-types";
import { OpenStatus } from "../../../../hooks";
import Textfield from "../../Textfield";
import { ADVANCED_MASKS_CONFIGS } from "../../Textfield/internal-helpers";
import { ColorType } from "../ColorPicker-interfaces";

import "./ColorPickerPopup.css";

type ColorPickerPopupProps = {
    value: ColorType | undefined;
    onChange: (value: ColorType) => void;
    parentElement: HTMLDivElement | null;
    className: OpenStatus;
};

//! TODO getPosition
//? when scroll is visible, calculation will probably be wrong, fix it
//? improve function typing, try to overwrite the function definition, eq. in getCssProperty file
 

//! TODO color picking
//? map value prop that comes initially to rgbValue format
//? slider
//? advanced logic for color picker

type RgbValue = {
    red: string;
    green: string;
    blue: string;
};

export const ColorPickerPopup = ({ value, onChange, parentElement, className }: ColorPickerPopupProps) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<GetPositionResponse>(undefined);

    const [rgbValue, setRgbValue] = useState<RgbValue>({
        red: "0",
        green: "0",
        blue: "0",
    });

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            setPosition(getPosition(parentElement, popupRef.current, "auto-bottom"));
        });

        resizeObserver.observe(document.body);

        return () => resizeObserver.disconnect();
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newRgbValue = { ...rgbValue, [name]: value };

        setRgbValue(newRgbValue);
        onChange(`rgb(${newRgbValue.red}, ${newRgbValue.green}, ${newRgbValue.blue})`);
    };

    return (
        <div ref={popupRef} className={`color-picker-popup ${className}`} style={{ ...position }}>
            <div className="color-picker" style={{ backgroundColor: value }} />
            <div className="middle-section">
                <div className="color-preview" style={{ backgroundColor: value }}></div>
            </div>
            <div className="bottom-section">
                <Textfield
                    value={rgbValue.red}
                    advancedMask={ADVANCED_MASKS_CONFIGS.RGB}
                    name="red"
                    label="R"
                    placeholder=" "
                    labelWidth={20}
                    onChange={handleChange}
                />
                <Textfield
                    value={rgbValue.green}
                    advancedMask={ADVANCED_MASKS_CONFIGS.RGB}
                    name="green"
                    label="G"
                    placeholder=" "
                    labelWidth={20}
                    onChange={handleChange}
                />
                <Textfield
                    value={rgbValue.blue}
                    advancedMask={ADVANCED_MASKS_CONFIGS.RGB}
                    name="blue"
                    label="B"
                    placeholder=" "
                    labelWidth={20}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};
