import classNames from "classnames";
import React from "react";

import { CardProps } from "./types";

import "./Card.scss";

/** Simple style card component with various variants, that displays `ReactNode` passed as children props   */
const Card = ({
  children,
  variant = "default",
  wrapperClassName,
  className,
  style = {},
  wrapperStyle = {},
}: CardProps) => {
  return (
    <div style={wrapperStyle} className={classNames("m-card", wrapperClassName, variant)}>
      <div style={style} className={classNames("m-card-content", className)}>
        {children}
      </div>
    </div>
  );
};

export default Card;
