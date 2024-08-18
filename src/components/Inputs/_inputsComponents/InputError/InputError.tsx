import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, useRef } from "react";

import Tooltip from "../../../Tooltip";

interface IInputErrorProps {
    style: CSSProperties;
    className: string;
    error: string;
}

export const InputError = ({ style, className, error }: IInputErrorProps) => {
    const tooltipRef = useRef<SVGSVGElement>(null);

    return (
        <>
            <FontAwesomeIcon ref={tooltipRef} icon="exclamation-circle" className={`error-icon ${className}`} style={style} />
            <Tooltip targetRef={tooltipRef} placement="right" autoFixPosition>
                {error}
            </Tooltip>
        </>
    );
};
