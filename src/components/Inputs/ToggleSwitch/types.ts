import { ChangeEvent } from "react";

import { SimpleInputProps } from "../_inputsComponents/input-types";

type ToggleSwitchClassNames = {
  container?: string;
  inputWrapper?: string;
  input?: string;
  label?: string;
  error?: string;
};

export type ToggleSwitchProps = SimpleInputProps & {
  /** Whether the toggle is checked. */
  checked?: boolean;

  /** Callback function triggered when the toggle switch state changes. */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: boolean) => void;

  /** Custom class names for styling the toggle switch elements. */
  classNamesObj?: ToggleSwitchClassNames;
};
