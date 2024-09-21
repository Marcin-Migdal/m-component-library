import { CSSProperties, ReactNode } from "react";

export type RowProps = {
    className?: string;
    style?: Omit<CSSProperties, "gap">;
    children?: ReactNode;
    gap?: {
        breakpoint: "sm" | "md" | "lg" | "xl";
        gapSize?: string | number;
    };
};
