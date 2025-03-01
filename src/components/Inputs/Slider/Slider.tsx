import classNames from "classnames";
import React, { ChangeEvent, CSSProperties, useLayoutEffect, useRef, useState } from "react";

import { useDebounceFunction } from "../../../hooks";
import { InputLabel } from "../../global-types";
import { InputContainer, InputError, InputsLabel } from "../_inputsComponents";
import { getInputsErrorStyle } from "../_inputsComponents/InputError/helpers/getInputsErrorStyle";
import { defaultInputPropsValue } from "../_inputUtils/defaultInputPropsValue";
import { getInputStyle } from "../_inputUtils/getInputStyle";
import { getSliderValueDynamicStyle } from "./getSliderValueDynamicStyle";
import { SliderChangeEvent, SliderProps } from "./types";

import "./Slider.scss";

const Slider = ({
  defaultValue,
  value: externalValue,
  onChange,
  onDebounce,
  name = undefined,
  label,
  error,
  classNamesObj,

  min,
  max,
  step = 1,
  debounceDelay = 300,
  valuePreviewType = "bottom-dynamic",

  labelType = defaultInputPropsValue.labelType,
  labelWidth = defaultInputPropsValue.labelWidth,
  size = defaultInputPropsValue.size,
  disabled = defaultInputPropsValue.disabled,
  readOnly = defaultInputPropsValue.readOnly,
  marginBottomType = defaultInputPropsValue.marginBottomType,
  floatingInputWidth = defaultInputPropsValue.floatingInputWidth,
}: SliderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [internalValue, setValue] = useState<number>(defaultValue || min);

  const [sliderValueDynamicStyle, setSliderValueDynamicStyle] = useState<CSSProperties>({});

  const controlled = externalValue !== undefined;
  const value = controlled ? externalValue : internalValue;

  let inputStyle = getInputStyle(labelType, label, labelWidth, floatingInputWidth);

  const [handleDebounce] = useDebounceFunction(onDebounce, debounceDelay);

  if (error) {
    inputStyle = { ...inputStyle, width: `calc(${inputStyle.width} - 2rem)` };
  }

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (readOnly) {
      event.preventDefault();
      return;
    }

    const parsedValue = parseFloat(event.target.value);

    const sliderChangeEvent: SliderChangeEvent = {
      ...event,
      target: {
        ...event.target,
        value: parsedValue,
        name: name || "",
        type: event.target.type,
        checked: false,
      },
    };

    handleDebounce(sliderChangeEvent, parsedValue);

    if (onChange) {
      onChange(sliderChangeEvent, parsedValue);
    }

    if (!controlled) {
      setValue(parsedValue);
    }
  };

  return (
    <InputContainer
      disabled={disabled}
      className={classNames("m-slider-container", classNamesObj?.container)}
      size={size}
      error={error}
      style={{
        // @ts-expect-error ts(2353) typescript do not recognize css variables
        "--slider-value": value,
      }}
      marginBottomType={marginBottomType}
      labelType={labelType}
    >
      <input
        readOnly={readOnly}
        disabled={disabled}
        ref={inputRef}
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        style={inputStyle}
        className={classNames("m-input m-slider", classNamesObj?.input)}
      />
      {label && (
        <InputsLabel
          label={label}
          labelType={labelType}
          className={classNames("m-slider-label", classNamesObj?.label)}
          labelWidth={labelWidth}
          forceFloating={labelType === InputLabel.FLOATING}
        />
      )}
      {valuePreviewType !== "none" && (
        <div className="m-relative-value-container">
          <span
            className={classNames("m-slider-value-preview", classNamesObj?.valuePreview, valuePreviewType)}
            style={sliderValueDynamicStyle}
          >
            {value}
          </span>
        </div>
      )}
      {error && (
        <InputError
          style={getInputsErrorStyle(labelType, labelWidth, floatingInputWidth)}
          className={classNames("textfield-error", classNamesObj?.error)}
          error={error}
        />
      )}
    </InputContainer>
  );
};

export default Slider;
