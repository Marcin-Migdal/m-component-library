import classNames from "classnames";
import React from "react";

import { RowProps } from "./types";

import "./Row.scss";

/** Col component wrapper */
const Row = ({ className, style = {}, children, gap }: RowProps) => {
  const gapCssVariables = gap
    ? Object.entries(gap).reduce((acc, [key, value]) => {
        acc[`--${key}-gap`] = value;
        return acc;
      }, {})
    : {};

  const gapCssClassNames = Object.keys(gap || {}).map((key) => `${key}-gap`);

  return (
    <div style={{ ...style, ...gapCssVariables }} className={classNames("m-grid-row", className, gapCssClassNames)}>
      {children}
    </div>
  );
};

export default Row;
