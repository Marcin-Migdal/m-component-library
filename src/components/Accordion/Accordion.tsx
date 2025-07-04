import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { AccordionContent } from "./AccordionContent";
import { AccordionItem } from "./AccordionItem";
import { AccordionSection } from "./AccordionSection";
import { AccordionToggle } from "./AccordionToggle";
import { AccordionContextProvider } from "./context";
import { AccordionMode, AccordionProps } from "./types";

import "./Accordion.scss";

/** A compound component for creating an interactive, expandable accordion structure. */
const Accordion = <
  MSelect extends AccordionMode = AccordionMode.SINGLE,
  MExpand extends AccordionMode = AccordionMode.SINGLE
>({
  children,

  selectionMode = undefined,
  selected,
  onSelect,

  expansionMode = undefined,
  expanded,
  onExpand,

  variant = "default",
  backgroundVariant = "default",
  expandAnimation = "smooth",
  className,
  style,

  instanceClassName,
  icon = "left",
  expandOnIconClick,
}: PropsWithChildren<AccordionProps<MSelect, MExpand>>) => {
  return (
    <div
      className={classNames(
        "m-accordion",
        `${expandAnimation}-expand-animation`,
        className,
        instanceClassName,
        variant,
        `background-${backgroundVariant}`
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
