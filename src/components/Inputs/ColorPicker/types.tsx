import { MInputChangeEvent } from "../../../types/MInputChangeEvent";
import { InputProps } from "../_inputsComponents/input-types";
import { StandAloneTextfieldClassNames } from "../_inputsComponents/StandAloneTextfield/types";

export type ColorValue = HslValue | RgbValue | string;

type ColorPickerClassNames = {
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  popupClassName?: string;
} & StandAloneTextfieldClassNames;

export type ColorPickerChangeEvent<TReturnedColor extends ReturnedColor> = TReturnedColor extends ReturnedColor.RGB
  ? MInputChangeEvent<RgbValue>
  : TReturnedColor extends ReturnedColor.HSL
  ? MInputChangeEvent<HslValue>
  : MInputChangeEvent<string>;

export type ColorPickerBlurEvent<TReturnedColor extends ReturnedColor> = TReturnedColor extends ReturnedColor.RGB
  ? MInputChangeEvent<RgbValue | null>
  : TReturnedColor extends ReturnedColor.HSL
  ? MInputChangeEvent<HslValue | null>
  : MInputChangeEvent<string | null>;

export type ColorPickerProps<TReturnedColor extends ReturnedColor> = InputProps & {
  /** Color value for the picker.
   * - If `ColorValue` is passed as value, component will be in `controlled` mode.
   * - If `undefined` is passed as value, component will be in `uncontrolled` mode.
   * @default undefined
   */
  value?: ColorValue | null;

  /** Default color value for the picker. */
  defaultValue?: ColorValue;

  /** Custom class names for styling different elements of the component. */
  classNamesObj?: ColorPickerClassNames;

  /** Placeholder text for the color input field. */
  placeholder?: string;

  /** Format of the returned color. */
  returnedColorType?: TReturnedColor;

  /** Callback triggered when color changes. */
  onChange?: (event: ColorPickerChangeEvent<TReturnedColor>, value: ColorValue) => void;

  /** Callback triggered when `ColorPicker lose focus`. */
  onBlur?: (event: ColorPickerBlurEvent<TReturnedColor>, value: ColorValue | null) => void;
};

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
