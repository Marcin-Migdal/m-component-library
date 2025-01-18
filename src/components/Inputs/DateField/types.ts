import { FocusEvent } from "react";

import { InputProps } from "../_inputsComponents/input-types";

type DateFieldClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
  popup?: string;
};

export type DateFieldProps = InputProps & {
  value?: string | Date;
  defaultValue?: string | Date;

  classNamesObj?: DateFieldClassNames;
  placeholder?: string;
  locale?: string;

  onChange?: (value: Date) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onClose?: (value: Date | undefined) => void;
};
