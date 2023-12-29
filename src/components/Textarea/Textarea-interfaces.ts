import { ChangeEvent, FocusEvent } from "react";

import * as GlobalInterfaces from "../global-interfaces";

export interface TextareaProps {
    value?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
    onBlur?: (event: FocusEvent<HTMLTextAreaElement>, value: string) => void;
    label?: string;
    error?: string;
    labelType?: GlobalInterfaces.InputLabelType;
    placeholder?: string;
    defaultInternalValue?: string;
    autoFocus?: boolean;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
    row?: number;
}
