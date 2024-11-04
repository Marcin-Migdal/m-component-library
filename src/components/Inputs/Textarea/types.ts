import { ChangeEvent, FocusEvent } from "react";

import { InputProps } from "../_inputsComponents/input-types";

type TextAreaClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
};

export type TextareaProps = InputProps & {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>, value: string) => void;
  placeholder?: string;
  defaultInternalValue?: string;
  autoFocus?: boolean;
  row?: number;
  classNamesObj?: TextAreaClassNames;
};
