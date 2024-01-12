import * as GlobalInterfaces from "../../global-interfaces";

export type DropdownProps<T> = {
    value?: OptionType<T>;
    name?: string;
    disabled?: boolean;
    onChange?: (event: IDropdownChangeEvent, value: OptionType<T> | undefined) => void;
    label?: string;
    error?: string;
    labelType?: GlobalInterfaces.InputLabelType;
    placeholder?: string;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
    clearable?: boolean;
    readOnly?: boolean;
    filter?: boolean;

    options?: OptionType<T>[];
    labelKey?: keyof T;
    valueKey?: keyof T;
};

export type OptionType<T> = Record<keyof T, string | number>;

export type ILabelValue<T = string> = {
    value: T;
    label: string;
};

export interface IDropdownChangeEvent extends React.MouseEvent<HTMLLIElement | SVGSVGElement, MouseEvent> {
    target: IDropdownChangeEventTarget;
}

interface IDropdownChangeEventTarget extends EventTarget {
    name?: string;
    value: any;
    type: "dropdown";
}
