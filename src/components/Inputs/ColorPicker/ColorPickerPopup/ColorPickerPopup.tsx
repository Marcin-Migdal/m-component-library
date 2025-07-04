import classNames from "classnames";
import React, { ChangeEvent, useLayoutEffect, useRef, useState } from "react";

import { getPosition } from "../../../../utils/getPosition";
import { Position } from "../../../../utils/getPosition/getPosition-types";
import { HueSliderCanvas } from "../../../Miscellaneous/HueSliderCanvas/HueSliderCanvas";
import { Textfield } from "../../Textfield";
import { hslToRgb, rgbToHsl } from "../helpers";
import { RgbValue } from "../types";
import { ColorPickerCanvas } from "./ColorPickerCanvas/ColorPickerCanvas";

import { useKeyboardClose, useOutsideClick } from "../../../../hooks";

import "./ColorPickerPopup.scss";

type ColorPickerPopupProps = {
  value: RgbValue | null;
  onChange: (value: RgbValue) => void;
  parentElement: HTMLDivElement;
  className: string;
  handleClose: (value: RgbValue) => void;
};

export const ColorPickerPopup = ({ value, onChange, parentElement, className, handleClose }: ColorPickerPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<Position | undefined>(undefined);

  const [hueSliderValue, setHueSliderValue] = useState<number>(value ? rgbToHsl(value).h : 0);
  const [rgbValue, setRgbValue] = useState<RgbValue>(value ? { ...value } : { r: 255, g: 255, b: 255 });

  useKeyboardClose(() => handleClose(rgbValue));
  useOutsideClick(popupRef, () => handleClose(rgbValue), {
    additionalOutsideClickTriggerCondition: ({ event, originalOutsideClickTriggerCondition }) => {
      const target: HTMLElement = event.target as HTMLElement;

      return (
        originalOutsideClickTriggerCondition &&
        !(target.className.includes("m-color-preview-square") || target.className.includes("m-color-preview"))
      );
    },
  });

  useLayoutEffect(() => {
    const calculatePopupPosition = () => {
      setPosition(getPosition(parentElement.querySelector(".m-color-preview-square"), popupRef.current));
    };

    const resizeObserver = new ResizeObserver(calculatePopupPosition);
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, [value]);

  const handleColorPick = (rgb: RgbValue) => {
    setRgbValue(rgb);

    onChange(rgb);
  };

  const handleHueSliderChange = (hue: number) => {
    const { s, l } = rgbToHsl(rgbValue);

    setHueSliderValue(hue);
    setRgbValue(hslToRgb(hue, s, l));

    onChange(hslToRgb(hue, s, l));
  };

  const handleRgbTextfieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newRgbValue: RgbValue = { ...rgbValue, [event.target.name as keyof RgbValue]: parseInt(event.target.value) };

    setRgbValue(newRgbValue);
    setHueSliderValue(rgbToHsl(newRgbValue).h);

    onChange(newRgbValue);
  };

  return (
    <div ref={popupRef} className={classNames("color-picker-popup", className)} style={{ ...position }}>
      <ColorPickerCanvas value={rgbValue} hue={hueSliderValue} onChange={handleColorPick} />
      <div className="middle-section">
        <div className="color-preview" style={{ backgroundColor: `rgb(${rgbValue.r},${rgbValue.g},${rgbValue.b})` }} />
        <HueSliderCanvas hue={hueSliderValue} onChange={handleHueSliderChange} />
      </div>
      <div className="bottom-section">
        <Textfield
          value={rgbValue.r.toString()}
          name="r"
          label="R"
          placeholder=" "
          labelWidth={20}
          onChange={handleRgbTextfieldChange}
        />
        <Textfield
          value={rgbValue.g.toString()}
          name="g"
          label="G"
          placeholder=" "
          labelWidth={20}
          onChange={handleRgbTextfieldChange}
        />
        <Textfield
          value={rgbValue.b.toString()}
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
