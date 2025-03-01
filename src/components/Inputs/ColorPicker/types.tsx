import { MInputChangeEvent } from "../../../types/MInputChangeEvent";
import { InputProps } from "../_inputsComponents/input-types";

export type ColorValue = HslValue | RgbValue | string;

type ColorPickerClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
  popup?: string;
};

export type ColorPickerChangeEvent = MInputChangeEvent<ColorValue>;

export type ColorPickerProps<TReturnedColor extends ReturnedColor> = InputProps & {
  /** Default color value for the picker. */
  defaultValue?: ColorValue;

  /** Custom class names for styling different elements of the component. */
  classNamesObj?: ColorPickerClassNames;

  /** Placeholder text for the color input field. */
  placeholder?: string;

  /** Callback triggered when the color picker opens. */
  onOpen?: () => void;

  /** Format of the returned color. */
  returnedColorType?: TReturnedColor;

  /** Callback triggered when color changes. */
  onChange?: (event: ColorPickerChangeEvent, value: ColorValue) => void;

  /** Callback triggered when the color picker closes. */
  onClose?: (value: ColorValue | undefined) => void;
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

export type ReturnedColor = "rgb" | "hsl" | "hex";

export type CanvasCoordinates = {
  x: number;
  y: number;
};
