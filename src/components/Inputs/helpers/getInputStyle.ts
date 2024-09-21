import { CSSProperties } from "react";
import { FloatingInputWidth, InputLabel, LabelPercentageWidth, SimpleInputLabel } from "../../global-types";

export function getInputStyle<T extends SimpleInputLabel | InputLabel>(
    labelType: T,
    label: string | undefined,
    labelWidth: LabelPercentageWidth,
    floatingInputWidth: T extends SimpleInputLabel ? undefined : FloatingInputWidth
): Pick<CSSProperties, "marginLeft" | "width"> {
    const getMarginLeft = () => {
        if (labelType === InputLabel.LEFT && label) {
            return `${labelWidth}%`;
        }

        return "unset";
    };

    const getWidth = (): CSSProperties["width"] => {
        if (labelType === InputLabel.FLOATING) {
            return `${floatingInputWidth}%`;
        } else if (label) {
            return `${100 - labelWidth}%`;
        }

        return "100%";
    };

    return {
        marginLeft: getMarginLeft(),
        width: getWidth(),
    };
}
