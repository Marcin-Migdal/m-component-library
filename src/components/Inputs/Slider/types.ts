import { ChangeEvent } from "react";
import { MInputChangeEvent } from "../../../types/MInputChangeEvent";
import { InputProps } from "../_inputsComponents/input-types";

export type ValuePreviewType = "top-dynamic" | "bottom-dynamic" | "top-static" | "bottom-static" | "none";

type SliderClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
  valuePreview?: string;
};

export type SliderChangeEvent = Omit<ChangeEvent<HTMLInputElement>, "target"> & {
  target: Omit<ChangeEvent<HTMLInputElement>["target"], "value">;
} & MInputChangeEvent<number>;

export type SliderProps = InputProps & {
  /** The current value of the `Slider`. Can be controlled externally. */
  value?: number;

  /** Minimum value of the slider. */
  min: number;

  /** Maximum value of the slider. */
  max: number;

  /** Step value for the slider increments. Defines the granularity of value changes. */
  step?: number;

  /** Default value of the `Slider`. */
  defaultValue?: number;

  /** Callback fired when the `Slider` value changes. */
  onChange?: (event: SliderChangeEvent, value: number) => void;

  /** Callback fired when the `Slider` value changes and set delay passed. <br/> Delay is controlled by `debounceDelay` props.*/
  onDebounce?: (event: SliderChangeEvent, value: number) => void;

  /** debounceDelay controls delay, after which onDebounce is called when `Slider` value changes. */
  debounceDelay?: number;

  /** Defines how the slider value preview is displayed.
   * - `top-dynamic`: Appears above the slider and moves with the handle.
   * - `bottom-dynamic`: Appears below the slider and moves with the handle, Default valuePreviewType .
   * - `top-static`: Fixed above the slider.
   * - `bottom-static`: Fixed below the slider.
   * - `none`: No value preview.
   */
  valuePreviewType?: ValuePreviewType;

  /** Custom class names for styling different elements of the component. */
  classNamesObj?: SliderClassNames;
};
