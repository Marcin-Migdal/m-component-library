import * as GlobalInterfaces from "../global-interfaces";

export interface DropdownProps {
    value?: any;
    name?: string;
    disabled?: boolean;
    handleChange?: (event: IDropdownChangeEvent, value: any | undefined) => void;
    options?: any[];
    labelKey?: string;
    valueKey?: string;
    label?: string;
    labelType?: GlobalInterfaces.InputLabelType;
    placeholder?: string;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.LabelPercentageWidth;
    clearable?: boolean;
}

export interface IDropdownChangeEvent extends React.MouseEvent<HTMLLIElement | SVGSVGElement, MouseEvent> {
    target: IDropdownChangeEventTarget;
}

interface IDropdownChangeEventTarget extends EventTarget {
    name?: string;
    value: any;
}
