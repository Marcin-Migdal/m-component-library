import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import { useAccordion, useAccordionSection } from "../hooks";
import { AccordionToggleProps } from "./types";

import { AccordionIndicatorIcon } from "./AccordionIndicatorIcon";
import "./AccordionToggle.css";

export const AccordionToggle: React.FC<PropsWithChildren<AccordionToggleProps>> = ({
  children,
  icon: localIcon,
  expandOnIconClick: localExpandOnIconClick,
  className,
}) => {
  const {
    selectionMode,
    handleSelect,

    expansionMode,
    handleExpand,

    instanceClassName,
    globalIcon,
    globalExpandOnIconClick,
  } = useAccordion();

  const { sectionId, isExpanded, isSelected } = useAccordionSection();

  const icon = localIcon ?? globalIcon ?? "right";
  const expandOnIconClick = localExpandOnIconClick ?? globalExpandOnIconClick ?? false;

  const handleToggleClick = () => {
    !expandOnIconClick && handleExpand(sectionId);
    handleSelect(sectionId);
  };

  const handleToggleIconClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (expandOnIconClick) {
      event.stopPropagation();
      handleExpand(sectionId);
    }
  };

  return (
    <div
      className={classNames("m-accordion-toggle", className, isExpanded ? "expanded" : "collapsed", {
        [`${instanceClassName}-toggle`]: !!instanceClassName,
        selected: isSelected,
        responsive: selectionMode !== undefined || expansionMode !== undefined,
      })}
      onClick={handleToggleClick}
    >
      {icon === "left" && (
        <AccordionIndicatorIcon onClick={handleToggleIconClick} type={icon} instanceClassName={instanceClassName} />
      )}
      {children}
      {icon === "right" && (
        <AccordionIndicatorIcon onClick={handleToggleIconClick} type={icon} instanceClassName={instanceClassName} />
      )}
    </div>
  );
};
