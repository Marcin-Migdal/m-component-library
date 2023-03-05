import { ChangeEvent } from "react";

export interface InputProps {
    value?: string;
    handleChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    labelType?: "left" | "right" | "floating";
    placeholder?: string;
    defaultInternalValue?: string;
    type?: "text" | "number";
    autoFocus?: boolean;
}
