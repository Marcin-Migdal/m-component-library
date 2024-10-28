import classNames from "classnames";
import React, {
  ChangeEvent,
  CSSProperties,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { InputLabel, ComponentSize } from "../../global-types";
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
  size = ComponentSize.MEDIUM,
  name = undefined,
  hideValuePreview = false,
  valuePreviewType = "bottom-dynamic",
  disabled = false,
  readOnly = false,
  noBottomMargin = false,
  classNamesObj,
}: SliderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [internalValue, setValue] = useState<number>(initialValue || min);

  const [sliderValueDynamicStyle, setSliderValueDynamicStyle] =
    useState<CSSProperties>({});

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
      inputRef.current &&
        setSliderValueDynamicStyle(
          getSliderValueDynamicStyle(inputRef.current, max, value)
        );
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
      className={classNames("m-slider-container", classNamesObj?.container)}
      size={size}
      style={{
        // @ts-expect-error ts(2353) typescript do not recognize css variables
        "--slider-value": value,
      }}
      noBottomMargin={noBottomMargin}
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
        style={getInputStyle(
          labelType as InputLabel,
          label,
          labelWidth,
          floatingInputWidth
        )}
        className={classNames("m-input m-slider", classNamesObj?.input)}
      />
      {label && (
        <InputsLabel
          label={label}
          labelType={labelType}
          className={classNames("slider", classNamesObj?.label)}
          labelWidth={labelWidth}
          forceFloating={labelType === InputLabel.FLOATING}
        />
      )}
      {!hideValuePreview && (
        <div className="m-relative-value-container">
          <span
            className={classNames(
              "m-slider-value-preview",
              classNamesObj?.valuePreview,
              valuePreviewType
            )}
            style={sliderValueDynamicStyle}
          >
            {value}
          </span>
        </div>
      )}
    </InputContainer>
  );
};

export default Slider;
