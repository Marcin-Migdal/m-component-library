import classNames from "classnames";
import React from "react";

import { RowProps } from "./types";

import "./Row.css";

const Row = ({ className = "", style = {}, children, gap }: RowProps) => {
  return (
    <div
      style={{
        ...style,
        //@ts-expect-error ts(2353) styles attribute does not expect css variable
        "--col-gap": gap?.gapSize ? gap.gapSize : "unset",
      }}
      className={classNames("m-grid-row", {
        [`col-${gap?.breakpoint}-gap`]: gap,
        className,
      })}
    >
      {children}
    </div>
  );
};

export default Row;
