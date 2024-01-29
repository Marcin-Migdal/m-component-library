import React, { CSSProperties } from "react";

import "./Col.css";

interface ColProps {
    className?: string;
    style?: CSSProperties;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    children?: any;
}

const Col = ({ className = "", style = {}, sm = 12, md = 12, lg = 12, xl = 12, children }: ColProps) => {
    return (
        <div style={style} className={`m-grid-col col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} ${className}`}>
            {children}
        </div>
    );
};

export default Col;
