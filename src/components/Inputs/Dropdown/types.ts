import { FocusEvent } from "react";

import * as GlobalInterfaces from "../../global-types";

type DropdownClassNames = {
  container?: string;
  control?: string;
  label?: string;
  error?: string;
  dropdownIndicatorIcon?: string;
  clearIcon?: string;
} & DropdownOptionsClassnames;

type DropdownBaseProps<T> = {
  value?: DropdownValue<T>;
  name?: string;
  disabled?: boolean;
  onChange?: (event: DropdownChangeEvent<T>, value: DropdownValue<T>) => void;
  onClear?: (event: DropdownClearEvent<T>, value: DropdownValue<T>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  labelWidth?: GlobalInterfaces.LabelPercentageWidth;
  floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
  clearable?: boolean;
  readOnly?: boolean;
  filter?: boolean;
  size?: `${GlobalInterfaces.ComponentSize}`;
  label?: string;
  labelType?: `${GlobalInterfaces.InputLabel}`;
  noBottomMargin?: boolean;
  classNamesObj?: DropdownClassNames;

  options?: T[];
};

export type DropdownCustomProps<T> = {
  labelKey: keyof T;
  valueKey: keyof T;
};

export type DropdownProps<T> = DropdownBaseProps<T> &
  (T extends LabelValue
    ? Partial<DropdownCustomProps<T>>
    : DropdownCustomProps<T>);

export type DropdownValue<T> = T | undefined;

export type DropdownChangeEvent<T> = React.MouseEvent<
  HTMLLIElement,
  MouseEvent
> & {
  target: DropdownChangeEventTarget<T>;
};

export type DropdownClearEvent<T> = React.MouseEvent<
  SVGSVGElement,
  MouseEvent
> & {
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
  filterElement: HTMLInputElement;
  uniqueDropdownId: string;
  handleDropdownChange: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    selectedOption: T
  ) => void;
  dropdownOptions: T[];
  value: T | undefined;
  valueKey: keyof T;
  labelKey: keyof T;
  classNamesObj?: DropdownOptionsClassnames;
};
