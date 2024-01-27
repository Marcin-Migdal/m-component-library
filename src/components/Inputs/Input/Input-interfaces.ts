import { ChangeEvent, FocusEvent } from "react";
import { InputState } from "react-input-mask";

import * as GlobalInterfaces from "../../global-interfaces";

type BaseInputProps = {
    value?: string;
    name?: string;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>, value: string) => void;
    label?: string;
    error?: string;
    labelType?: GlobalInterfaces.InputLabelType;
    placeholder?: string;
    defaultInternalValue?: string;
    type?: InputTypes;
    autoFocus?: boolean;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
    advancedMask?: undefined;
    mask?: undefined;
};

export type InputProps = BaseInputProps | (Omit<BaseInputProps, "advancedMask" | "mask"> & (BaseMaskInputType | AdvancedMaskInputType));

export type InputTypes = "text" | "number" | "password";

//* Base mask interfaces
export type BaseMaskInputType = {
    advancedMask?: undefined;
    mask: INPUT_MASKS | string;
};

export enum INPUT_MASKS {
    PHONE_NUMBER = "999-999-999",
    CREDIT_CARD = "9999 9999 9999 9999",
    ZIP_CODE = "99-999",
}

//* Advanced mask interfaces
export type AdvancedMaskInputType = {
    mask?: undefined;
    advancedMask: AdvancedMaskType;
};

export type AdvancedMaskType = {
    mask: string;
    formatChars: IFormatChars;
    beforeChange: BeforeMaskedValueChangeType;
};

export interface IFormatChars {
    [key: string]: string;
}

type BeforeMaskedValueChangeType = (newState: InputState, oldState: InputState, userInput: string, formatChars: IFormatChars) => InputState;
