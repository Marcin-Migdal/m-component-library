import React, { CSSProperties } from "react";

import "./Row.css";

interface IRowProps {
    className?: string;
    style?: CSSProperties;
    children?: any;
}

const Row = ({ className = "", style = {}, children }: IRowProps) => {
    return (
        <div style={style} className={`m-grid-row ${className}`}>
            {children}
        </div>
    );
};

export default Row;
