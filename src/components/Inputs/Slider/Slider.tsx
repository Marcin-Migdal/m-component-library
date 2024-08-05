import React, { useLayoutEffect, useRef, useState } from "react";

import { InputsLabel } from "../_inputsComponents/InputsLabel/InputsLabel";
import { getInputStyle } from "../input-helpers";
import { SliderProps } from "./Slider-interfaces";
import { getValuePosition } from "./getValuePosition";

import "./Slider.css";

const Slider = ({
    value: externalValue,
    min,
    max,
    step = 1,
    initialValue,
    onChange,
    label,
    labelType = "left",
    labelWidth = 30,
    floatingInputWidth = 100,
    size = "medium",
    name = undefined,
    hideValuePreview = false,
    disabled = false,
}: SliderProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [internalValue, setValue] = useState<number>(initialValue || min);

    const [sliderValuePosition, setSliderValuePosition] = useState<{ top: number; left: number } | undefined>(undefined);

    const controlled = externalValue !== undefined;
    const value = controlled ? externalValue : internalValue;

    useLayoutEffect(() => {
        if (!inputRef.current) {
            return;
        }

        const observer = new ResizeObserver(() => {
            if (!inputRef.current) {
                return;
            }

            setSliderValuePosition(getValuePosition(inputRef.current, max, value));
        });

        observer.observe(document.body);
        observer.observe(inputRef.current);

        return () => {
            observer.disconnect();
        };
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);

        if (onChange) {
            onChange(event);
        }

        if (!controlled) {
            setValue(newValue);
        }
    };

    return (
        <>
            <div className={`m-slider-container ${size}`}>
                <input
                    disabled={disabled}
                    ref={inputRef}
                    type="range"
                    name={name}
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    style={getInputStyle(labelType, label, labelWidth, floatingInputWidth)}
                    className="m-slider"
                />
                {label && (
                    <InputsLabel
                        label={label}
                        labelType={labelType}
                        className="slider"
                        labelWidth={labelWidth}
                        isFocused={false}
                        isFilled={labelType === "floating" ? true : !!value}
                    />
                )}
            </div>
            {!hideValuePreview && sliderValuePosition && (
                <span className="m-slider-value-preview" style={sliderValuePosition}>
                    {value}
                </span>
            )}
        </>
    );
};

export default Slider;
