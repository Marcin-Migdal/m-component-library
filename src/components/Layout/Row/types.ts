import { CSSProperties } from "react";

export type RowProps = {
    className?: string;
    style?: Omit<CSSProperties, "gap">;
    children?: any;
    gap?: {
        breakpoint: "sm" | "md" | "lg" | "xl";
        gapSize?: string | number;
    };
};
