import React from "react";

import { ICardProps } from "./card-interfaces";

import "./style.css";

const Card = ({ children, variant = "default", className = "", style = {} }: ICardProps) => {
    return (
        <div style={style} className={`m-card ${className} ${variant}`}>
            {children}
        </div>
    );
};

export default Card;
