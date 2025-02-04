import classNames from "classnames";
import React from "react";

import { CardProps } from "./types";

import "./Card.scss";

const Card = ({ children, variant = "default", className = "", style = {} }: CardProps) => {
  return (
    <div style={style} className={classNames("m-card", variant, className)}>
      {children}
    </div>
  );
};

export default Card;
