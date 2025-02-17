import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

import { ToggleIconPosition } from "../types";

type AccordionIndicatorIconProps = {
  onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  type: ToggleIconPosition;
  instanceClassName: string | undefined;
};

export const AccordionIndicatorIcon = ({ onClick, type, instanceClassName }: AccordionIndicatorIconProps) => {
  return (
    <FontAwesomeIcon
      onClick={onClick}
      icon="chevron-right"
      className={classNames("m-accordion-toggle-indicator", type, {
        [`${instanceClassName}-indicator`]: !!instanceClassName,
      })}
    />
  );
};
