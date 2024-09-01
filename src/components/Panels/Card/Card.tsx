import React from "react";

import { CardProps } from "./types";

import "./style.css";

const Card = ({ children, variant = "default", className = "", style = {} }: CardProps) => {
    return (
        <div style={style} className={`m-card ${className} ${variant}`}>
            {children}
        </div>
    );
};

export default Card;
