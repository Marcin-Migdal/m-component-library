import { ChangeEvent } from "react";

import * as GlobalInterfaces from "../../global-types";

type CheckboxClassNames = {
    container?: string;
    inputWrapper?: string;
    input?: string;
    label?: string;
    error?: string;
    valuePreview?: string;
};

export type CheckboxProps = {
    checked?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: boolean) => void;
    error?: string;
    labelWidth?: GlobalInterfaces.LabelPercentageWidth;
    size?: `${GlobalInterfaces.InputSize}`;
    label?: string;
    labelType?: `${GlobalInterfaces.SimpleInputLabel}`;
    noBottomMargin?: boolean;
    classNamesObj?: CheckboxClassNames;
};
