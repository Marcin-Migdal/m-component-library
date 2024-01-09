import React from "react";

import "./Col.css";

interface ColProps {
    className?: string;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    children?: any;
}

const Col = ({ className = "", sm = 12, md = 12, lg = 12, xl = 12, children }: ColProps) => {
    return <div className={`col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} ${className}`}>{children}</div>;
};

export default Col;
