import React, { ChangeEvent, CSSProperties, FocusEvent } from "react";
import { InputProps } from "../input-types";

export type TextfieldTypes = "text" | "number" | "password";

export type StandAloneTextfieldProps = Omit<
  InputProps,
  "labelWidth" | "label" | "disableDefaultMargin" | "error" | "labelType" | "floatingInputWidth"
> & {
  /** The current value of the `TextField`. Can be controlled externally. */
  value?: string;

  /** Placeholder text displayed when the input is empty. */
  placeholder?: string;

  /** Defines the type of `TextField`
   * - `text` default type.
   * - `number`
   * - `password`
   */
  type?: TextfieldTypes;

  /** Automatically focuses the `TextField` when it mounts.
   * @default false */
  autoFocus?: boolean;

  /** Additional CSS class names for custom styling. */
  className?: string;

  /** Optional text displayed before value in `TextField`. */
  prefix?: string;

  /** Callback fired when the text value changes. */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /** Callback fired when the `TextField` loses focus. */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;

  /** Callback fired when the `TextField` gains focus. */
  onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;

  /** Callback fired when the `TextField` is clicked. */
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

  /** Inline styles for the `TextField`. */
  style?: CSSProperties;

  /** Unique identifier for the `TextField`. */
  id?: string;
};
