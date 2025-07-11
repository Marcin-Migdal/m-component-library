import React, { ChangeEvent, CSSProperties, FocusEvent, ReactNode } from "react";
import { InputProps } from "../input-types";

export type StandAloneTextfieldClassNames = {
  standAloneTextfieldContainerClassName?: string;
  inputClassName?: string;
  prefixClassName?: string;
};

export type TextfieldTypes = "text" | "number" | "password";

export type StandAloneTextfieldProps = Omit<
  InputProps,
  "labelWidth" | "label" | "marginBottomType" | "error" | "labelType" | "floatingInputWidth"
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

  /** Whether `StandAloneTextfield` have disabled form submitting with enter key press .
   * @default false */
  disableSubmitOnEnter?: boolean;

  /** Custom class names for styling different elements of the component. */
  classNamesObj?: StandAloneTextfieldClassNames;

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

  /** Prefix for the id attributes in `StandAloneTextfieldProps`.
   * @default "textfield" */
  idPrefix?: string;

  standAloneTextfieldChildren?: ReactNode;
  standAloneTextfieldChildrenPosition?: "left" | "right";
};
