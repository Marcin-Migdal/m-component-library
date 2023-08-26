import { InputState } from "react-input-mask";
import { ChangeEvent } from "react";

export interface InputProps {
    value?: string;
    name?: string;
    handleChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    onBlur?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    label?: string;
    labelType?: "left" | "right" | "floating";
    placeholder?: string;
    defaultInternalValue?: string;
    type?: InputTypes;
    autoFocus?: boolean;
    labelPercentageWidth?: LabelPercentageWidth;

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

export type LabelPercentageWidth =
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37
    | 38
    | 39
    | 40
    | 41
    | 42
    | 43
    | 44
    | 45
    | 46
    | 47
    | 48
    | 49
    | 50
    | 51
    | 52
    | 53
    | 54
    | 55
    | 56
    | 57
    | 58
    | 59
    | 60
    | 61
    | 62
    | 63
    | 64
    | 65
    | 66
    | 67
    | 68
    | 69
    | 70
    | 71
    | 72
    | 73
    | 74
    | 75
    | 76
    | 77
    | 78
    | 79
    | 80;
