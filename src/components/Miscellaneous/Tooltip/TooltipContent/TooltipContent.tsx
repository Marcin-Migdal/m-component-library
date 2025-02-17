import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { TooltipContentProps } from "../types";

export const TooltipContent = ({
  children,
  style = {},
  tooltipRef,
  className,
}: PropsWithChildren<TooltipContentProps>) => {
  return (
    <div ref={tooltipRef} className={classNames("tooltip", className)} style={style}>
      {children}
    </div>
  );
};
