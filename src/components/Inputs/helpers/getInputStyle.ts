import { CSSProperties } from "react";

import * as GlobalInterfaces from "../../global-types";

export function getInputStyle<T extends GlobalInterfaces.SimpleInputLabel | GlobalInterfaces.InputLabel>(
    labelType: T,
    label: string | undefined,
    labelWidth: GlobalInterfaces.LabelPercentageWidth,
    floatingInputWidth: T extends GlobalInterfaces.SimpleInputLabel ? undefined : GlobalInterfaces.FloatingInputWidth
): Pick<CSSProperties, "marginLeft" | "width"> {
    return {
        marginLeft: labelType === GlobalInterfaces.InputLabel.LEFT && label ? `${labelWidth}%` : "unset",
        width: labelType === GlobalInterfaces.InputLabel.FLOATING ? `${floatingInputWidth}%` : label ? `${100 - labelWidth}%` : "100%",
    };
}
