import { ChangeEvent } from "react";

import * as GlobalInterfaces from "../global-interfaces";

export interface TextareaProps {
    value?: string;
    name?: string;
    handleChange?: (event: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
    onBlur?: (event: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
    label?: string;
    labelType?: GlobalInterfaces.InputLabelType;
    placeholder?: string;
    defaultInternalValue?: string;
    autoFocus?: boolean;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.LabelPercentageWidth;
    row?: number;
}
