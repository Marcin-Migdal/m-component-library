import { ChangeEvent, FocusEvent } from "react";

import { MInputChangeEvent } from "../../../types/MInputChangeEvent";
import { InputProps } from "../_inputsComponents/input-types";

import {
  StandAloneTextfieldClassNames,
  StandAloneTextfieldProps,
} from "../_inputsComponents/StandAloneTextfield/types";

type NumberFieldClassNames = {
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
} & StandAloneTextfieldClassNames;

export type NumberFieldChangeEvent = ChangeEvent<HTMLInputElement> & MInputChangeEvent<number | null>;

export type NumberFieldProps = InputProps & {
  /** Default value of the `NumberField`. */
  defaultValue?: number;

  /** The current value of the `NumberField`. Can be controlled externally. */
  value?: number | null;

  /** Min value of the `NumberField`. */
  min?: number;

  /** Max value of the `NumberField`. */
  max?: number;

  /** Callback fired when the `NumberField` value changes. */
  onChange?: (event: NumberFieldChangeEvent, value: number | null) => void;

  /** Callback fired when the `NumberField` loses focus. */
  onBlur?: (event: NumberFieldChangeEvent, value: number | null) => void;

  /** Callback fired when the `NumberField` gains focus. */
  onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;

  /** Callback fired when the `NumberField` is clicked. */
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

  /** Callback fired when the `NumberField` value changes and set delay passed. <br/> Delay is controlled by `debounceDelay` props.*/
  onDebounce?: (event: NumberFieldChangeEvent, value: number | null) => void;

  /** debounceDelay controls delay, after which onDebounce is called when `NumberField` value changes. */
  debounceDelay?: number;

  /** Custom class names for styling different elements of the component. */
  classNamesObj?: NumberFieldClassNames;

  /** Control if the event returned in onChange and onBlur callback is persisted, if not then simple event with basic values is returned. */
  persistEvent?: boolean;
} & Omit<StandAloneTextfieldProps, "onChange" | "onBlur" | "onFocus" | "onClick" | "className" | "type" | "value">;
