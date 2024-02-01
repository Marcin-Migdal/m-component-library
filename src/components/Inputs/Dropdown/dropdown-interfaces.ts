import { FocusEvent } from "react";

import * as GlobalInterfaces from "../../global-interfaces";

// spróbować rozdzielić DropdownProps żeby interface lepiej był w stanie rozpoznać, kiedy T istnieje, a kiedy T jest ILabelValue
// może wtedy na zewnątrz będzie lepiej w stanie jakiego typu są pola
type DropdownBaseProps<T> = {
    value?: DropdownValue<T>;
    name?: string;
    disabled?: boolean;
    onChange?: (event: IDropdownChangeEvent<T>, value: DropdownValue<T>) => void;
    onClear?: (event: IDropdownClearEvent<T>, value: DropdownValue<T>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    label?: string;
    error?: string;
    labelType?: GlobalInterfaces.InputLabelType;
    placeholder?: string;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
    clearable?: boolean;
    readOnly?: boolean;
    filter?: boolean;

    options?: T[];
};

export type DropdownCustomProps<T> = {
    labelKey: keyof T;
    valueKey: keyof T;
};

export type DropdownProps<T> = DropdownBaseProps<T> & (T extends ILabelValue ? Partial<DropdownCustomProps<T>> : DropdownCustomProps<T>);

export type DropdownValue<T> = T | undefined;

export interface IDropdownChangeEvent<T> extends React.MouseEvent<HTMLLIElement, MouseEvent> {
    target: IDropdownChangeEventTarget<T>;
}

export interface IDropdownClearEvent<T> extends React.MouseEvent<SVGSVGElement, MouseEvent> {
    target: IDropdownChangeEventTarget<T>;
}

type ILabelValue = {
    value: string | number;
    label: string;
};

interface IDropdownChangeEventTarget<T> extends EventTarget {
    name?: string;
    value: DropdownValue<T>;
    type: "dropdown";
}

export interface IDropdownOptionsProps<T> {
    containerElement: HTMLDivElement;
    filterElement: HTMLInputElement;
    uniqueDropdownId: string;
    handleDropdownChange: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, selectedOption: T) => void;
    dropdownOptions: T[];
    value: T | undefined;
    valueKey: keyof T;
    labelKey: keyof T;
}
