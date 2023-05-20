import React from "react";

import "./Row.css";

interface IRowProps {
    className?: string;
    children?: any;
}

const Row = ({ className = "", children }: IRowProps) => {
    return <div className={`m-grid-row ${className}`}>{children}</div>;
};

export default Row;
