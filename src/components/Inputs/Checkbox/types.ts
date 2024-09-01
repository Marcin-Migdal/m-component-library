import { ChangeEvent } from "react";

import * as GlobalInterfaces from "../../global-types";

export type CheckboxProps = {
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: boolean) => void;
    error?: string;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    size?: `${GlobalInterfaces.InputSize}`;
    label?: string;
    labelType?: `${GlobalInterfaces.SimpleInputLabel}`;
};
