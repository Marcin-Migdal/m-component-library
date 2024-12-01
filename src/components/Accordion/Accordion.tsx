import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { AccordionContent, AccordionContentProps } from "./AccordionContent";
import { AccordionItem, AccordionItemProps } from "./AccordionItem";
import { AccordionSection, AccordionSectionProps } from "./AccordionSection";
import { AccordionToggle, AccordionToggleProps } from "./AccordionToggle";
import { AccordionContextProvider } from "./context";
import { AccordionProps, Mode } from "./types";

import "./Accordion.css";

// TODO! nesting
// TODO! tree theme

const Accordion: React.FC<PropsWithChildren<AccordionProps>> & {
  Section: React.FC<PropsWithChildren<AccordionSectionProps>>;
  Toggle: React.FC<PropsWithChildren<AccordionToggleProps>>;
  Content: React.FC<PropsWithChildren<AccordionContentProps>>;
  Item: React.FC<PropsWithChildren<AccordionItemProps>>;
} = ({
  children,

  selectionMode = undefined,
  selected,
  onSelect,

  expansionMode = undefined,
  expanded,
  onExpand,

  variant = "default",
  expandAnimation = "smooth",
  className,

  instanceClassName,
  icon,
  expandOnIconClick,
}) => {
  return (
    <div
      className={classNames(
        "m-accordion",
        `${expandAnimation}-expand-animation`,
        className,
        instanceClassName,
        variant
      )}
    >
      <AccordionContextProvider
        selectionMode={selectionMode as Mode | undefined}
        selected={selected}
        onSelect={onSelect}
        expansionMode={expansionMode as Mode | undefined}
        expanded={expanded}
        onExpand={onExpand}
        instanceClassName={instanceClassName}
        icon={icon}
        expandOnIconClick={expandOnIconClick}
      >
        {children}
      </AccordionContextProvider>
    </div>
  );
};

Accordion.Section = AccordionSection;
Accordion.Toggle = AccordionToggle;
Accordion.Content = AccordionContent;
Accordion.Item = AccordionItem;

export default Accordion;
