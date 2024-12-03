import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { useAccordion } from "../hooks";
import { AccordionItemProps } from "./types";

import "./AccordionItem.css";

export const AccordionItem: React.FC<PropsWithChildren<AccordionItemProps>> = ({ children, className }) => {
  const { instanceClassName } = useAccordion();

  return (
    <div
      className={classNames("m-accordion-item", className, {
        [`${instanceClassName}-item`]: !!instanceClassName,
      })}
    >
      {children}
    </div>
  );
};
