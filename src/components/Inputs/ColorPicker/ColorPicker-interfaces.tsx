import { CSSProperties } from "react";
import * as GlobalInterfaces from "../../global-interfaces";

export type ColorType = CSSProperties["color"];

export type ColorPickerProps = {
    defaultInternalValue?: string;
    value?: ColorType;
    label?: string;
    onChange?: (event: { target: { name: string; value: ColorType } }) => void;
    labelType?: GlobalInterfaces.SimpleInputLabelType;
    size?: GlobalInterfaces.InputSizeType;
    name?: string;
    disabled?: boolean;
    error?: string;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
};
