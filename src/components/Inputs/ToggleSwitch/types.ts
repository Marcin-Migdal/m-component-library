import { ChangeEvent } from "react";

import { MInputChangeEvent } from "../../../types/MInputChangeEvent";
import { InputProps } from "../_inputsComponents/input-types";

type ToggleSwitchClassNames = {
  container?: string;
  inputWrapper?: string;
  input?: string;
  label?: string;
  error?: string;
};

export type ToggleSwitchChangeEvent = Omit<ChangeEvent<HTMLInputElement>, "target"> & {
  target: Omit<ChangeEvent<HTMLInputElement>["target"], "value">;
} & MInputChangeEvent<boolean>;

export type ToggleSwitchProps = InputProps & {
  /** Whether the toggle is checked. */
  checked?: boolean;

  /** Callback function triggered when the toggle switch state changes. */
  onChange?: (event: ToggleSwitchChangeEvent, value: boolean) => void;

  /** Custom class names for styling the toggle switch elements. */
  classNamesObj?: ToggleSwitchClassNames;
};
