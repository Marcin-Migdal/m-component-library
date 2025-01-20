import { FocusEvent } from "react";

import { InputProps } from "../_inputsComponents/input-types";

type DateFieldClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
  popup?: string;
};

export type SingleDate = string | Date;
export type RangeDate = [SingleDate | undefined, SingleDate | undefined];
export type DateValue<TRange extends boolean> = TRange extends true ? RangeDate : SingleDate;

export type InternalRangeDate = [Date | undefined, Date | undefined];
export type InternalDateValue<TRange extends boolean> = TRange extends true ? InternalRangeDate : Date;

export type DateFieldProps<TRange extends boolean> = InputProps & {
  value?: DateValue<TRange>;
  defaultValue?: DateValue<TRange>;

  classNamesObj?: DateFieldClassNames;
  placeholder?: string;
  locale?: string;
  range?: TRange;

  onChange?: (value: InternalDateValue<TRange>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onClose?: (value: InternalDateValue<TRange> | undefined) => void;
};
