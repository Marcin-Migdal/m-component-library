import * as GlobalInterfaces from "../../global-interfaces";

// spróbować rozdzielić DropdownProps żeby interface lepiej był w stanie rozpoznać, kiedy T istnieje, a kiedy T jest ILabelValue
// może wtedy na zewnątrz będzie lepiej w stanie jakiego typu są pola
type DropdownBaseProps<T> = {
    value?: DropdownValue<T>;
    name?: string;
    disabled?: boolean;
    onChange?: (event: IDropdownChangeEvent<T>, value: DropdownValue<T>) => void;
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

export interface IDropdownChangeEvent<T> extends React.MouseEvent<HTMLLIElement | SVGSVGElement, MouseEvent> {
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
