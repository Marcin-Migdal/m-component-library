import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { useAccordion } from "../hooks";
import { AccordionItemProps } from "./types";

import "./AccordionItem.scss";
import "./AccordionItem.theme.scss";

export const AccordionItem: React.FC<PropsWithChildren<AccordionItemProps>> = ({ children, className, style }) => {
  const { instanceClassName } = useAccordion();

  return (
    <div
      style={style}
      className={classNames("m-accordion-item", className, {
        [`${instanceClassName}-item`]: !!instanceClassName,
      })}
    >
      {children}
    </div>
  );
};
