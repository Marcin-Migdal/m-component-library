import { ChangeEvent } from "react";

import { SimpleInputProps } from "../_inputsComponents/input-types";

type CheckboxClassNames = {
  container?: string;
  inputWrapper?: string;
  input?: string;
  label?: string;
  error?: string;
  valuePreview?: string;
};

export type CheckboxProps = SimpleInputProps & {
  /** Whether the checkbox is checked. */
  checked?: boolean;

  /** Callback function triggered when the checkbox state changes. */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: boolean) => void;

  /** Custom class names for styling the checkbox elements. */
  classNamesObj?: CheckboxClassNames;
};
