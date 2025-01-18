import { InputProps } from "../_inputsComponents/input-types";

export type ColorValue = HslValue | RgbValue | string;

export type ColorPickerOnChange<TValue> = (event: { target: { name: string; value: TValue } }) => void;

type ColorPickerClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
  popup?: string;
};

export type ColorPickerProps = InputProps & {
  defaultValue?: ColorValue;
  classNamesObj?: ColorPickerClassNames;
  placeholder?: string;

  onOpen?: () => void;
} & (
    | {
        returnedColorType: ReturnedColor.RGB;
        onChange: ColorPickerOnChange<RgbValue>;
        onClose?: (value: RgbValue | undefined) => void;
      }
    | {
        returnedColorType: ReturnedColor.HSL;
        onChange: ColorPickerOnChange<HslValue>;
        onClose?: (value: HslValue | undefined) => void;
      }
    | {
        returnedColorType: ReturnedColor.HEX;
        onChange: ColorPickerOnChange<string>;
        onClose?: (value: string | undefined) => void;
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
