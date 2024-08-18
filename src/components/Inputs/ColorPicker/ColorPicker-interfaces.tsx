import * as GlobalInterfaces from "../../global-interfaces";

export type ColorValue = HslValue | RgbValue | string;

export type ColorPickerOnChange<TValue> = (event: { target: { name: string; value: TValue } }) => void;

export type ColorPickerProps = {
    defaultInternalValue?: ColorValue;
    label?: string;
    labelType?: GlobalInterfaces.SimpleInputLabelType;
    size?: GlobalInterfaces.InputSizeType;
    name?: string;
    disabled?: boolean;
    error?: string;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
} & (
    | {
          returnedColorType: ReturnedColorType.RGB;
          onChange: ColorPickerOnChange<RgbValue>;
      }
    | {
          returnedColorType: ReturnedColorType.HSL;
          onChange: ColorPickerOnChange<HslValue>;
      }
    | {
          returnedColorType: ReturnedColorType.HEX;
          onChange: ColorPickerOnChange<string>;
      }
);

export type HslValue = {
    h: number;
    s: number;
    l: number;
};

export type RgbValue = {
    r: number;
    g: number;
    b: number;
};

export const defaultColorValue: RgbValue = { r: 255, g: 0, b: 0 };

export enum ReturnedColorType {
    RGB = "rgb",
    HSL = "hsl",
    HEX = "hex",
}

export type CanvasCoordinates = { x: number; y: number };
