import { ChangeEvent } from "react";

import * as GlobalInterfaces from "../../global-interfaces";

export interface CheckboxProps {
    checked?: boolean;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: boolean) => void;
    error?: string;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    size?: GlobalInterfaces.InputSizeType;
    label?: string;
    labelType?: GlobalInterfaces.SimpleInputLabelType;
}
