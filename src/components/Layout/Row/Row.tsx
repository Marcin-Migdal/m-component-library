import React from "react";

import "./Row.css";
import { RowProps } from "./types";

const Row = ({ className = "", style = {}, children, gap }: RowProps) => {
    return (
        <div
            style={{
                ...style,
                //@ts-expect-error ts(2353) styles attribute does not expect css variable
                "--col-gap": gap?.gapSize ? gap.gapSize : "unset",
            }}
            className={`m-grid-row ${gap ? `col-${gap.breakpoint}-gap` : ""} ${className}`}
        >
            {children}
        </div>
    );
};

export default Row;
