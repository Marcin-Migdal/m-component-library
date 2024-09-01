import { ChangeEvent, FocusEvent } from "react";
import { InputState } from "react-input-mask";

import * as GlobalInterfaces from "../../global-types";

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
    size?: `${GlobalInterfaces.InputSize}`;
    label?: string;
    labelType?: `${GlobalInterfaces.InputLabel}`;
};

export type TextfieldProps = BaseTextfieldProps & (BaseMaskTextfieldType | AdvancedMaskTextfieldType | NoMaskTextfieldType);

export type TextfieldTypes = "text" | "number" | "password";

//* No mask type
type NoMaskTextfieldType = {
    advancedMask?: undefined;
    mask?: undefined;
};

//* Base mask type
export type BaseMaskTextfieldType = {
    advancedMask?: undefined;
    mask: `${TEXT_FIELD_MASKS}` | string;
};

export enum TEXT_FIELD_MASKS {
    PHONE_NUMBER = "999-999-999",
    CREDIT_CARD = "9999 9999 9999 9999",
    ZIP_CODE = "99-999",
}

//* Advanced mask type
export type AdvancedMaskTextfieldType = {
    mask?: undefined;
    advancedMask: AdvancedMaskType;
};

export type AdvancedMaskType = {
    mask: string;
    formatChars: FormatChars;
    beforeChange?: BeforeMaskedValueChangeType;
};

export type FormatChars = {
    [key: string]: string;
};

type BeforeMaskedValueChangeType = (newState: InputState, oldState: InputState, userInput: string, formatChars: FormatChars) => InputState;
