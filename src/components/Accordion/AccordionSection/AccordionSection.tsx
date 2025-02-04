import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { AccordionSectionContextProvider } from "../context";
import { isStateSelected } from "../helpers";
import { useAccordion } from "../hooks";
import { AccordionSectionProps } from "./types";

import "./AccordionSection.scss";

export const AccordionSection: React.FC<PropsWithChildren<AccordionSectionProps>> = ({
  children,
  sectionId,
  className,
}) => {
  const { selected, expanded, instanceClassName } = useAccordion();

  const isSelected = isStateSelected(selected, sectionId);
  const isExpanded = isStateSelected(expanded, sectionId);

  return (
    <div
      className={classNames("m-accordion-section", className, {
        [`${instanceClassName}-section`]: !!instanceClassName,
      })}
    >
      <AccordionSectionContextProvider sectionId={sectionId} isSelected={isSelected} isExpanded={isExpanded}>
        {children}
      </AccordionSectionContextProvider>
    </div>
  );
};
