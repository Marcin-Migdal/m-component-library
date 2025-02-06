import classNames from "classnames";
import React from "react";

import { CardProps } from "./types";

import "./Card.scss";

/** Simple style card component with various variants, that displays `ReactNode` passed as children props   */
const Card = ({ children, variant = "default", className, style = {} }: CardProps) => {
  return (
    <div style={style} className={classNames("m-card", variant, className)}>
      {children}
    </div>
  );
};

export default Card;
