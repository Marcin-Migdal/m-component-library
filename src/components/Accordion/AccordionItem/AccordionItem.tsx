import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { useAccordion, useAccordionSection } from "../hooks";
import { AccordionItemProps } from "./types";

import "./AccordionItem.css";

export const AccordionItem: React.FC<PropsWithChildren<AccordionItemProps>> = ({ children, className }) => {
  const { instanceClassName } = useAccordion();
  const {} = useAccordionSection();

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
