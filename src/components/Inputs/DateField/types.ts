import { FocusEvent } from "react";

import { MInputChangeEvent } from "../../../types/MInputChangeEvent";
import { InputProps } from "../_inputsComponents/input-types";

type DateFieldClassNames = {
  container?: string;
  input?: string;
  label?: string;
  error?: string;
  popup?: string;
};

export type ParsableSingleDate = string | Date;
export type ParsableRangeDate = [ParsableSingleDate | null, ParsableSingleDate | null];
export type ParsableDateValue<TRange extends boolean = false> = TRange extends true
  ? ParsableRangeDate
  : ParsableSingleDate;

export type RangeDate = [Date | null, Date | null];
export type DateValue<TRange extends boolean = false> = TRange extends true ? RangeDate : Date;

export type DateFieldChangeEvent<TRange extends boolean = false> = React.MouseEvent<HTMLButtonElement, MouseEvent> &
  MInputChangeEvent<DateValue<TRange>>;

export type DateFieldBlurEvent<TRange extends boolean = false> = MInputChangeEvent<DateValue<TRange> | null>;

export type DateFieldProps<TRange extends boolean = false> = InputProps & {
  /** The currently selected date or date range. */
  value?: ParsableDateValue<TRange> | null;

  /** The default date or date range when the component is first rendered. */
  defaultValue?: ParsableDateValue<TRange>;

  /** Custom class names for different parts of the component. */
  classNamesObj?: DateFieldClassNames;

  /** Placeholder text for the `DateField`. */
  placeholder?: string;

  /** Locale used for formatting the date display (e.g., "en-US"). */
  locale?: string;

  /** Determines if the date field should allow selecting a range of dates. */
  range?: TRange;

  /** Callback triggered when the date selection changes. */
  onChange?: (event: DateFieldChangeEvent<TRange>, value: DateValue<TRange>) => void;

  /** Callback triggered when the `DateField` gains focus. */
  onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;

  /** Callback triggered when the `DateField` is clicked. */
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

  /** Callback fired when the `DateField` loses focus. */
  onBlur?: (event: DateFieldBlurEvent<TRange>, value: DateValue<TRange> | null) => void;
};
