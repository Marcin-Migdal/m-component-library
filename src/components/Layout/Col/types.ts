import { CSSProperties } from "react";
import { Optionalize } from "../../global-types";

export type ColProps = {
    className?: string;
    style?: CSSProperties;
} & Optionalize<{ sm: number }, { smFlex: number }> &
    Optionalize<{ md: number }, { mdFlex: number }> &
    Optionalize<{ lg: number }, { lgFlex: number }> &
    Optionalize<{ xl: number }, { xlFlex: number }>;
