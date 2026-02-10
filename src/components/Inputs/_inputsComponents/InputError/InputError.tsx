import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { CSSProperties, useMemo, useRef } from "react";

import { PrimaryPlacement } from "../../../../utils/getPosition/getPosition-types";
import { Tooltip } from "../../../Miscellaneous/Tooltip";
import { getErrorContent } from "./helpers/getErrorContent";
import { InputErrorType } from "./types";

import "./InputError.scss";

type InputErrorProps = {
  style: CSSProperties;
  className: string;
  error: InputErrorType;
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
      <Tooltip targetRef={tooltipRef} primaryPlacement={PrimaryPlacement.RIGHT}>
        {errorContent}
      </Tooltip>
    </>
  );
};
