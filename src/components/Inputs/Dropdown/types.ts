import React, { ComponentProps, FocusEvent, ReactElement, MouseEvent as ReactMouseEvent } from "react";

import { MInputChangeEvent } from "../../../types/MInputChangeEvent";
import { GetPositionConfig } from "../../../utils";
import { InputProps } from "../_inputsComponents/input-types";
import { StandAloneTextfield } from "../_inputsComponents/StandAloneTextfield/StandAloneTextfield";
import { StandAloneTextfieldProps } from "../_inputsComponents/StandAloneTextfield/types";

type DropdownClassNames = {
  container?: string;
  control?: string;
  label?: string;
  error?: string;
  dropdownIndicatorIcon?: string;
  clearIcon?: string;
} & DropdownOptionsClassnames;

export type DropdownChangeEvent<T> = React.MouseEvent<HTMLLIElement, MouseEvent> & MInputChangeEvent<T>;

export type DropdownClearEvent = React.MouseEvent<Element, MouseEvent> & MInputChangeEvent<undefined>;

type DropdownBaseProps<T> = InputProps & {
  /** Currently selected value in the dropdown. */
  value?: DropdownValue<T> | null;

  /** Callback triggered when an option is selected. */
  onChange?: (event: DropdownChangeEvent<T>, value: T) => void;

  /** Callback triggered when the selection is cleared. */
  onClear?: (event: DropdownClearEvent, value: undefined) => void;

  /** Callback triggered when the dropdown receives focus. */
  onFocus?: (event: FocusEvent<HTMLInputElement> | undefined) => void;

  /** Placeholder text for the input field. */
  placeholder?: string;

  /** Whether the dropdown has a clearable selection. */
  clearable?: boolean;

  /** Whether options should be filtered based on input. */
  filter?: boolean;

  /** Custom class names for styling different parts of the component. */
  classNamesObj?: DropdownClassNames;

  /** Prefix text inside the dropdown input field. */
  prefix?: ComponentProps<typeof StandAloneTextfield>["prefix"];

  /** Custom components that can be used to replace parts of the dropdown. */
  components?: Partial<DropdownComponents<T>>;

  /** Message displayed when no options are available. */
  noOptionsMessage?: string;

  /** Height adjustment for each option element. */
  optionHeightFit?: number;

  /** List of options available in the dropdown. */
  options?: T[];

  /** Object that configures position of the dropdown menu. */
  menuPositionConfig?: Partial<GetPositionConfig>;
};

export type ClearIconProps = {
  className: string;
  onClick: (e: ReactMouseEvent<Element, MouseEvent>) => void;
};

export type IndicatorIconProps = {
  className: string;
  onClick: (e: ReactMouseEvent<Element, MouseEvent>) => void;
};

export type DropdownComponents<T> = {
  /** Custom control component (input field). */
  Control: (props: StandAloneTextfieldProps) => ReactElement;

  /** Custom clear icon component. */
  ClearIcon: (props: ClearIconProps) => ReactElement | null;

  /** Custom dropdown indicator icon component. */
  IndicatorIcon: (props: IndicatorIconProps) => ReactElement | null;

  /** Custom options list component. */
  Options: (props: DropdownOptionsProps<T>) => ReactElement;
} & DropdownOptionsComponents<T>;

export type DropdownCustomProps<T> = {
  /** The keyof options/value object that represents the label to be displayed. */
  labelKey: keyof T;

  /** The keyof options/value object that represents the value associated with the option. */
  valueKey: keyof T;
};

export type DropdownProps<T> = DropdownBaseProps<T> &
  (T extends LabelValue ? Partial<DropdownCustomProps<T>> : DropdownCustomProps<T>);

export type DropdownValue<T> = T | undefined;

type LabelValue = {
  /** The actual value of the option. Typically a string or number. */
  value: string | number;

  /** The human-readable label associated with the value. */
  label: string;
};

type DropdownOptionsClassnames = {
  dropdownOptions?: string;
  dropdownOption?: string;
  emptyDropdownOption?: string;
};

export type DropdownOptionsProps<T> = {
  filterElement: HTMLInputElement | null | undefined;
  id: string;
  handleDropdownChange: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, selectedOption: T) => void;
  options: T[];
  value: T | null | undefined;
  valueKey: keyof T;
  labelKey: keyof T;
  classNamesObj?: DropdownOptionsClassnames;
  noOptionsMessage: string;
  optionHeightFit: number;
  menuPositionConfig?: Partial<GetPositionConfig>;
} & DropdownOptionsComponents<T>;

export type DropdownOptionsComponents<T> = {
  Option: (props: DropdownOptionComponentProps<T>) => ReactElement;
  EmptyMessage: (props: EmptyMessageComponentProps) => ReactElement;
};

export type EmptyMessageComponentProps = {
  id: string;
  className: string;
  noOptionsMessage: string;
};

export type DropdownOptionComponentProps<T> = {
  option: T;
  valueKey: keyof T;
  labelKey: keyof T;
  id: string;
  className?: string;
  handleDropdownChange: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, selectedOption: T) => void;
};

export type DropdownNumberOption = {
  /** The actual value of the option. */
  value: number;

  /** The human-readable label associated with the value. */
  label: string;
};

export type DropdownStringOption = {
  /** The actual value of the option.*/
  value: string;

  /** The human-readable label associated with the value. */
  label: string;
};
