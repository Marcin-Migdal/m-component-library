import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { getColClasses } from "./helpers/getColClasses";
import { getFlexColClasses } from "./helpers/getFlexColClasses";
import { ColProps } from "./types";

import "./Col.scss";

const Col = ({
  className = "",
  style = {},
  children,

  //! Sizes
  sm,
  md,
  lg,
  xl,

  //! Flex Sizes
  smFlex,
  mdFlex,
  lgFlex,
  xlFlex,
}: PropsWithChildren<ColProps>) => {
  const sizes = { sm, md, lg, xl };
  const flexSizes = { smFlex, mdFlex, lgFlex, xlFlex };

  const colClasses = getColClasses(sizes);
  const colFlexClasses = getFlexColClasses(flexSizes);

  return (
    <div style={style} className={classNames("m-grid-col", colClasses, colFlexClasses, className)}>
      {children}
    </div>
  );
};

export default Col;
