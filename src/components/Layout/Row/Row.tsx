import React, { CSSProperties } from "react";

import "./Row.css";

interface IRowProps {
    className?: string;
    style?: Omit<CSSProperties, "gap">;
    children?: any;
    gap?: {
        breakpoint: "sm" | "md" | "lg" | "xl";
        gapSize?: string | number;
    };
}

const Row = ({ className = "", style = {}, children, gap }: IRowProps) => {
    return (
        <div
            style={{
                ...style,
                //@ts-ignore
                "--col-gap": gap?.gapSize ? gap.gapSize : "unset",
            }}
            className={`m-grid-row ${gap ? `col-${gap.breakpoint}-gap` : ""} ${className}`}
        >
            {children}
        </div>
    );
};

export default Row;
