import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { AccordionContent, AccordionContentProps } from "./AccordionContent";
import { AccordionItem, AccordionItemProps } from "./AccordionItem";
import { AccordionSection, AccordionSectionProps } from "./AccordionSection";
import { AccordionToggle, AccordionToggleProps } from "./AccordionToggle";
import { AccordionContextProvider } from "./context";
import { AccordionMode, AccordionProps } from "./types";

import "./Accordion.scss";

/** A compound component for creating an interactive, expandable accordion structure. */
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
  style,

  instanceClassName,
  icon = "left",
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
      style={style}
    >
      <AccordionContextProvider
        selectionMode={selectionMode as AccordionMode | undefined}
        selected={selected}
        onSelect={onSelect}
        expansionMode={expansionMode as AccordionMode | undefined}
        expanded={expanded}
        onExpand={onExpand}
        instanceClassName={instanceClassName}
        icon={icon}
        expandOnIconClick={expandOnIconClick}
        expandAnimation={expandAnimation}
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
