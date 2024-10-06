import * as GlobalInterfaces from "../../global-types";

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
    size?: `${GlobalInterfaces.InputSize}`;
    label?: string;
    labelType?: `${GlobalInterfaces.InputLabel}`;
    hideValuePreview?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    valuePreviewType?: ValuePreviewType;
    noBottomMargin?: boolean;
};
