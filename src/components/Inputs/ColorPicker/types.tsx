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
  /** Default color value for the picker. */
  defaultValue?: ColorValue;

  /** Custom class names for styling different elements of the component. */
  classNamesObj?: ColorPickerClassNames;

  /** Placeholder text for the color input field. */
  placeholder?: string;

  /** Callback triggered when the color picker opens. */
  onOpen?: () => void;
} & (
    | {
        /** Format of the returned color: RGB. */
        returnedColorType: ReturnedColor.RGB;

        /** Callback triggered when color changes. */
        onChange: ColorPickerOnChange<RgbValue>;

        /** Callback triggered when the color picker closes. */
        onClose?: (value: RgbValue | undefined) => void;
      }
    | {
        /** Format of the returned color: HSL. */
        returnedColorType: ReturnedColor.HSL;

        /** Callback triggered when color changes. */
        onChange: ColorPickerOnChange<HslValue>;

        /** Callback triggered when the color picker closes. */
        onClose?: (value: HslValue | undefined) => void;
      }
    | {
        /** Format of the returned color: HEX. */
        returnedColorType: `${ReturnedColor.HEX}`;

        /** Callback triggered when color changes. */
        onChange: ColorPickerOnChange<string>;

        /** Callback triggered when the color picker closes. */
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
