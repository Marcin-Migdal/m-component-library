import { InputState } from "react-input-mask";
import { ChangeEvent } from "react";

import * as GlobalInterfaces from "../global-interfaces";

export interface InputProps {
    value?: string;
    name?: string;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    onBlur?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    label?: string;
    labelType?: GlobalInterfaces.InputLabelType;
    placeholder?: string;
    defaultInternalValue?: string;
    type?: InputTypes;
    autoFocus?: boolean;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;

    customMask?: CUSTOM_INPUT_MASKS;
    mask?: INPUT_MASKS | string;
    formatChars?: any;
    onBeforeMaskedValueChange?: (newState: InputState, oldState: InputState, userInput: string) => InputState;
}

export type InputTypes = "text" | "number" | "password";

export enum CUSTOM_INPUT_MASKS {
    TIME = "time",
}

export enum INPUT_MASKS {
    DATE = "99-99-9999",
    CREDIT_CARD = "9999 9999 9999 9999",
    ZIP_CODE = "99-999",
}
