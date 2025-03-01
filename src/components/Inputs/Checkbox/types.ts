import { ChangeEvent } from "react";

import { MInputChangeEvent } from "../../../types/MInputChangeEvent";
import { InputProps } from "../_inputsComponents/input-types";

type CheckboxClassNames = {
  container?: string;
  inputWrapper?: string;
  input?: string;
  label?: string;
  error?: string;
  valuePreview?: string;
};

export type CheckboxChangeEvent = Omit<ChangeEvent<HTMLInputElement>, "target"> & {
  target: Omit<ChangeEvent<HTMLInputElement>["target"], "value">;
} & MInputChangeEvent<boolean>;

export type CheckboxProps = InputProps & {
  /** Whether the checkbox is checked. */
  checked?: boolean;

  /** Callback function triggered when the checkbox state changes. */
  onChange?: (event: CheckboxChangeEvent, value: boolean) => void;

  /** Custom class names for styling the checkbox elements. */
  classNamesObj?: CheckboxClassNames;
};
