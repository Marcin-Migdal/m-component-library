import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { CSSProperties, useRef } from "react";

import { Placement } from "../../../../utils/getPosition/getPosition-types";
import { Tooltip } from "../../../Miscellaneous";

import "./InputError.scss";

type InputErrorProps = {
  style: CSSProperties;
  className: string;
  error: string;
};

export const InputError = ({ style, className, error }: InputErrorProps) => {
  const tooltipRef = useRef<SVGSVGElement>(null);

  return (
    <>
      <FontAwesomeIcon
        ref={tooltipRef}
        icon="exclamation-circle"
        className={classNames("error-icon", className)}
        style={style}
      />
      <Tooltip targetRef={tooltipRef} placement={Placement.RIGHT}>
        {error}
      </Tooltip>
    </>
  );
};
