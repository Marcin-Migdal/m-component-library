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
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>, value: string) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onDebounce?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;

  debounceDelay?: number;

  defaultValue?: string;
  classNamesObj?: TextFieldClassNames;
} & Omit<StandAloneTextfieldProps, "onChange" | "onBlur" | "onFocus" | "onClick" | "className">;
