import { ChangeEvent, FocusEvent } from "react";

import * as GlobalInterfaces from "../../global-types";

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
    readOnly?: boolean;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
    row?: number;
    size?: `${GlobalInterfaces.InputSize}`;
    label?: string;
    labelType?: `${GlobalInterfaces.InputLabel}`;
    noBottomMargin?: boolean;
};
