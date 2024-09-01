import * as GlobalInterfaces from "../../global-types";

export type ColorValue = HslValue | RgbValue | string;

export type ColorPickerOnChange<TValue> = (event: { target: { name: string; value: TValue } }) => void;

export type ColorPickerProps = {
    defaultInternalValue?: ColorValue;
    label?: string;
    labelType?: `${GlobalInterfaces.InputLabel}`;
    size?: `${GlobalInterfaces.InputSize}`;
    name?: string;
    disabled?: boolean;
    error?: string;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
    onOpen?: () => void;
} & (
    | {
          returnedColorType: ReturnedColor.RGB;
          onChange: ColorPickerOnChange<RgbValue>;
          onClose?: (value: RgbValue) => void;
      }
    | {
          returnedColorType: ReturnedColor.HSL;
          onChange: ColorPickerOnChange<HslValue>;
          onClose?: (value: HslValue) => void;
      }
    | {
          returnedColorType: ReturnedColor.HEX;
          onChange: ColorPickerOnChange<string>;
          onClose?: (value: string) => void;
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

export const defaultColorPickerValue: RgbValue = {
    r: 255,
    g: 0,
    b: 0,
};

export enum ReturnedColor {
    RGB = "rgb",
    HSL = "hsl",
    HEX = "hex",
}

export type CanvasCoordinates = {
    x: number;
    y: number;
};
