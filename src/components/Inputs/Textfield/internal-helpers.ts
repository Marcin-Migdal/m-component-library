import { InputState } from "react-input-mask";

import { AdvancedMaskType, IFormatChars } from "./Textfield-interfaces";

export type AdvancedTextfieldMasksTypes = "TIME" | "DATE";

export type AdvancedMasksConfig = {
    [key in AdvancedTextfieldMasksTypes]: AdvancedMaskType;
};

//! TIME mask handler
const handleTimeBeforeChange = (newState: InputState, oldState: InputState, userInput: string, formatChars: IFormatChars): InputState => {
    let { value: newValue, selection: newSelection } = newState;

    // Conditional mask for the 2nd digit base on the first digit
    if (newValue.startsWith("2")) formatChars["2"] = "[0-3]";
    // To block 24, 25, etc.
    else formatChars["2"] = "[0-9]"; // To allow 05, 17, etc.
    return { value: newValue, selection: newSelection };
};

//! DATE mask handler
const handleDateBeforeChange = (newState: InputState, oldState: InputState, userInput: string, formatChars: IFormatChars): InputState => {
    let { value: newValue, selection: newSelection } = newState;
    const valueLength: number = newValue.replace(/[_-]/g, "").length;

    if (valueLength == 1) {
        if (newValue.startsWith("3")) formatChars["2"] = "[0-1]";
        else formatChars["2"] = "[0-9]";
    }

    if (valueLength == 3) {
        if (newValue[3] == "1") formatChars["4"] = "[0-2]";
        else formatChars["4"] = "[0-9]";
    }

    return { value: newValue, selection: newSelection };
};

export const ADVANCED_MASKS_CONFIGS: AdvancedMasksConfig = {
    TIME: {
        mask: "12:34",
        formatChars: {
            "1": "[0-2]", // 0
            "2": "[0-9]", // 1
            "3": "[0-5]", // 3
            "4": "[0-9]", // 4
        },
        beforeChange: handleTimeBeforeChange,
    },
    DATE: {
        mask: "12-34-5678",
        formatChars: {
            "1": "[0-3]", // 0
            "2": "[0-9]", // 1
            "3": "[0-1]", // 3
            "4": "[0-9]", // 4
            "5": "[0-9]", // 6
            "6": "[0-9]", // 7
            "7": "[0-9]", // 8
            "8": "[0-9]", // 9
        },
        beforeChange: handleDateBeforeChange,
    },
};
