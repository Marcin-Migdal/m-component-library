import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { CSSProperties, ReactNode, useMemo, useRef } from "react";

import { Placement } from "../../../../utils/getPosition/getPosition-types";
import { Tooltip } from "../../../Miscellaneous/Tooltip";

import "./InputError.scss";

export type InputError = string | { [key: string]: string | InputError };

const getErrorContent = (error: InputError): ReactNode => {
  if (typeof error === "string") {
    return error;
  }

  const processErrorObject = (obj: { [key: string]: string | InputError }) => {
    for (const key in obj) {
      const value = obj[key];

      if (typeof value === "string") {
        return value;
      } else {
        return processErrorObject(value);
      }
    }
  };

  return processErrorObject(error);
};

type InputErrorProps = {
  style: CSSProperties;
  className: string;
  error: InputError;
};

export const InputError = ({ style, className, error }: InputErrorProps) => {
  const tooltipRef = useRef<SVGSVGElement>(null);

  const errorContent = useMemo(() => getErrorContent(error), [error]);

  return (
    <>
      <FontAwesomeIcon
        ref={tooltipRef}
        icon="exclamation-circle"
        className={classNames("error-icon", className)}
        style={style}
      />
      <Tooltip targetRef={tooltipRef} placement={Placement.RIGHT}>
        {errorContent}
      </Tooltip>
    </>
  );
};
