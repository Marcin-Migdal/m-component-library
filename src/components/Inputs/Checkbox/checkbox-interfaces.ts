import { ChangeEvent } from "react";

import * as GlobalInterfaces from "../../global-interfaces";

export interface CheckboxProps {
    checked?: boolean;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: boolean) => void;
    label?: string;
    error?: string;
    labelType?: CheckboxLabelType;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    size?: GlobalInterfaces.InputSizeType;
}

export type CheckboxLabelType = Exclude<GlobalInterfaces.InputLabelType, "floating">;
