import { ChangeEvent, FocusEvent } from "react";

import { StandAloneTextfieldProps } from "../_inputsComponents/StandAloneTextfield/types";
import { InputProps } from "../_inputsComponents/input-types";

type TextFieldClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
};

export type TextfieldProps = InputProps & {
  /** Callback fired when the `TextField` value changes. */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;

  /** Callback fired when the `TextField` loses focus. */
  onBlur?: (event: FocusEvent<HTMLInputElement>, value: string) => void;

  /** Callback fired when the `TextField` gains focus. */
  onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;

  /** Callback fired when the `TextField` is clicked. */
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

  /** Callback fired when the `TextField` value changes and set delay passed. <br/> Delay is controlled by `debounceDelay` props.*/
  onDebounce?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;

  /** debounceDelay controls delay, after which onDebounce is called when `TextField` value changes. */
  debounceDelay?: number;

  /** Default value of the `TextField`. */
  defaultValue?: string;

  /** Custom class names for styling different elements of the component. */
  classNamesObj?: TextFieldClassNames;
} & Omit<StandAloneTextfieldProps, "onChange" | "onBlur" | "onFocus" | "onClick" | "className">;
