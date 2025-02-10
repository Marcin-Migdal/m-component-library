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
  /** The currently selected date or date range. */
  value?: DateValue<TRange>;

  /** The default date or date range when the component is first rendered. */
  defaultValue?: DateValue<TRange>;

  /** Custom class names for different parts of the component. */
  classNamesObj?: DateFieldClassNames;

  /** Placeholder text for the `DateField`. */
  placeholder?: string;

  /** Locale used for formatting the date display (e.g., "en-US"). */
  locale?: string;

  /** Determines if the date field should allow selecting a range of dates. */
  range?: TRange;

  /** Callback triggered when the date selection changes. */
  onChange?: (value: InternalDateValue<TRange>) => void;

  /** Callback triggered when the `DateField` gains focus. */
  onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;

  /** Callback triggered when the `DateField` is clicked. */
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

  /** Callback triggered when the date picker is closed. */
  onClose?: (value: InternalDateValue<TRange> | undefined) => void;
};
