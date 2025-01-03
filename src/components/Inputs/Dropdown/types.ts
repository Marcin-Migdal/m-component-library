import React, { ComponentProps, FocusEvent, ReactElement, MouseEvent as ReactMouseEvent } from "react";

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

type DropdownBaseProps<T> = InputProps & {
  value?: DropdownValue<T>;
  onChange?: (event: DropdownChangeEvent<T>, value: DropdownValue<T>) => void;
  onClear?: (event: DropdownClearEvent<T>, value: DropdownValue<T>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  clearable?: boolean;
  filter?: boolean;
  classNamesObj?: DropdownClassNames;
  prefix?: ComponentProps<typeof StandAloneTextfield>["prefix"];
  components?: Partial<DropdownComponents<T>>;
  noOptionsMessage?: string;

  options?: T[];
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
  Control: (props: StandAloneTextfieldProps) => ReactElement;

  ClearIcon: (props: ClearIconProps) => ReactElement;
  IndicatorIcon: (props: IndicatorIconProps) => ReactElement;

  Options: (props: DropdownOptionsProps<T>) => ReactElement;
} & DropdownOptionsComponents<T>;

export type DropdownCustomProps<T> = {
  labelKey: keyof T;
  valueKey: keyof T;
};

export type DropdownProps<T> = DropdownBaseProps<T> &
  (T extends LabelValue ? Partial<DropdownCustomProps<T>> : DropdownCustomProps<T>);

export type DropdownValue<T> = T | undefined;

export type DropdownChangeEvent<T> = React.MouseEvent<HTMLLIElement, MouseEvent> & {
  target: DropdownChangeEventTarget<T>;
};

export type DropdownClearEvent<T> = React.MouseEvent<Element, MouseEvent> & {
  target: DropdownChangeEventTarget<T>;
};

type LabelValue = {
  value: string | number;
  label: string;
};

type DropdownChangeEventTarget<T> = EventTarget & {
  name?: string;
  value: DropdownValue<T>;
  type: "dropdown";
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
  value: T | undefined;
  valueKey: keyof T;
  labelKey: keyof T;
  classNamesObj?: DropdownOptionsClassnames;
  noOptionsMessage: string;
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
