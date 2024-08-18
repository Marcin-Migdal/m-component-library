import * as GlobalInterfaces from "../../global-interfaces";

export type ValuePreviewType = "top-dynamic" | "bottom-dynamic" | "top-static" | "bottom-static";

export type SliderProps = {
    value?: number;
    min: number;
    max: number;
    step?: number;
    initialValue?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
    size?: GlobalInterfaces.InputSizeType;
    label?: string;
    labelType?: GlobalInterfaces.InputLabelType;
    hideValuePreview?: boolean;
    disabled?: boolean;
    valuePreviewType?: ValuePreviewType;
};
