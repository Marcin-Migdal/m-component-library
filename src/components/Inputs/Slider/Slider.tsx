import React, { CSSProperties, useLayoutEffect, useRef, useState } from "react";

import { InputLabel, InputSize } from "../../global-types";
import { InputContainer, InputsLabel } from "../_inputsComponents";
import { getInputStyle } from "../helpers/getInputStyle";
import { getSliderValueDynamicStyle } from "./getSliderValueDynamicStyle";
import { SliderProps } from "./types";

import "./Slider.css";

const Slider = ({
    value: externalValue,
    min,
    max,
    step = 1,
    initialValue,
    onChange,
    label,
    labelType = InputLabel.LEFT,
    labelWidth = 30,
    floatingInputWidth = 100,
    size = InputSize.MEDIUM,
    name = undefined,
    hideValuePreview = false,
    valuePreviewType = "bottom-dynamic",
    disabled = false,
}: SliderProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [internalValue, setValue] = useState<number>(initialValue || min);

    const [sliderValueDynamicStyle, setSliderValueDynamicStyle] = useState<CSSProperties>({});

    const controlled = externalValue !== undefined;
    const value = controlled ? externalValue : internalValue;

    useLayoutEffect(() => {
        if (!inputRef.current) {
            return;
        }

        if (valuePreviewType.includes("static")) {
            setSliderValueDynamicStyle({});
            return;
        }

        const observer = new ResizeObserver(() => {
            inputRef.current && setSliderValueDynamicStyle(getSliderValueDynamicStyle(inputRef.current, max, value));
        });

        observer.observe(document.body);
        observer.observe(inputRef.current);

        return () => {
            observer.disconnect();
        };
    }, [value, valuePreviewType]);

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
        <InputContainer
            disabled={disabled}
            className="m-slider-container"
            size={size}
            style={{
                // @ts-expect-error ts(2353) typescript do not recognize css variables
                "--slider-value": value,
            }}
        >
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
                style={getInputStyle(labelType as InputLabel, label, labelWidth, floatingInputWidth)}
                className="m-input m-slider"
            />
            {label && (
                <InputsLabel
                    label={label}
                    labelType={labelType}
                    className="slider"
                    labelWidth={labelWidth}
                    forceFloating={labelType === InputLabel.FLOATING}
                />
            )}
            {!hideValuePreview && (
                <div className="m-relative-value-container">
                    <span className={`m-slider-value-preview ${valuePreviewType}`} style={sliderValueDynamicStyle}>
                        {value}
                    </span>
                </div>
            )}
        </InputContainer>
    );
};

export default Slider;
