import { ChangeEvent, FocusEvent } from "react";
import { InputState } from "react-input-mask";

import * as GlobalInterfaces from "../../global-interfaces";
import { ConditionalInputLabelType } from "../Input-interfaces";

type BaseTextfieldProps = {
    value?: string;
    name?: string;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>, value: string) => void;
    error?: string;
    placeholder?: string;
    defaultInternalValue?: string;
    type?: TextfieldTypes;
    autoFocus?: boolean;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    floatingInputWidth?: GlobalInterfaces.FloatingInputWidth;
    size?: GlobalInterfaces.InputSizeType;
} & ConditionalInputLabelType;

export type TextfieldProps = BaseTextfieldProps & (BaseMaskTextfieldType | AdvancedMaskTextfieldType | NoMaskTextfieldType);

export type TextfieldTypes = "text" | "number" | "password";

//* No mask interfaces
type NoMaskTextfieldType = {
    advancedMask?: undefined;
    mask?: undefined;
};

//* Base mask interfaces
export type BaseMaskTextfieldType = {
    advancedMask?: undefined;
    mask: TEXT_FIELD_MASKS | string;
};

export enum TEXT_FIELD_MASKS {
    PHONE_NUMBER = "999-999-999",
    CREDIT_CARD = "9999 9999 9999 9999",
    ZIP_CODE = "99-999",
}

//* Advanced mask interfaces
export type AdvancedMaskTextfieldType = {
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
