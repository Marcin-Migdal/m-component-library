import { ChangeEvent, FocusEvent } from "react";

import { MInputChangeEvent } from "../../../types/MInputChangeEvent";
import { InputProps } from "../_inputsComponents/input-types";

type TextAreaClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
};

export type TextareaChangeEvent = ChangeEvent<HTMLTextAreaElement> & MInputChangeEvent;

export type TextareaProps = InputProps & {
  /** The current value of the `TextArea`. Can be controlled externally. */
  value?: string;

  /** Callback fired when the `TextArea` value changes. */
  onChange?: (event: TextareaChangeEvent, value: string) => void;

  /** Callback fired when the `TextArea` loses focus. */
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>, value: string) => void;

  /** Callback fired when the `TextArea` value changes and set delay passed. <br/> Delay is controlled by `debounceDelay` props.*/
  onDebounce?: (event: ChangeEvent<HTMLTextAreaElement>, value: string) => void;

  /** debounceDelay controls delay, after which onDebounce is called when `TextArea` value changes. */
  debounceDelay?: number;

  /** Placeholder text displayed when the `TextArea` is empty. */
  placeholder?: string;

  /** The current value of the `TextArea`. */
  defaultValue?: string;

  /** Automatically focuses the `TextArea` when it mounts.
   * @default false */
  autoFocus?: boolean;

  /** Custom class names for styling different elements of the component. */
  classNamesObj?: TextAreaClassNames;
};
