import { ChangeEvent, FocusEvent } from "react";

import * as GlobalInterfaces from "../../global-interfaces";

export type TextareaProps = {
    value?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
    onBlur?: (event: FocusEvent<HTMLTextAreaElement>, value: string) => void;
    error?: string;
    placeholder?: string;
    defaultInternalValue?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
    row?: number;
    size?: GlobalInterfaces.InputSizeType;
    label?: string;
    labelType?: GlobalInterfaces.InputLabelType;
};
