import { ChangeEvent } from "react";

import { SimpleInputLabel } from "../../global-types";
import { InputProps } from "../_inputsComponents/input-types";

type CheckboxClassNames = {
  container?: string;
  inputWrapper?: string;
  input?: string;
  label?: string;
  error?: string;
  valuePreview?: string;
};

export type CheckboxProps = Omit<InputProps<SimpleInputLabel>, "floatingInputWidth"> & {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: boolean) => void;
  classNamesObj?: CheckboxClassNames;
};
