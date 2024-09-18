import { CSSProperties } from "react";
import { FloatingInputWidth, InputLabel, LabelPercentageWidth, SimpleInputLabel } from "../../global-types";

export function getInputStyle<T extends SimpleInputLabel | InputLabel>(
    labelType: T,
    label: string | undefined,
    labelWidth: LabelPercentageWidth,
    floatingInputWidth: T extends SimpleInputLabel ? undefined : FloatingInputWidth
): Pick<CSSProperties, "marginLeft" | "width"> {
    return {
        marginLeft: labelType === InputLabel.LEFT && label ? `${labelWidth}%` : "unset",
        width: labelType === InputLabel.FLOATING ? `${floatingInputWidth}%` : label ? `${100 - labelWidth}%` : "100%",
    };
}
