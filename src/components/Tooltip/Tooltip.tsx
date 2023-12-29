import React, { CSSProperties, ReactNode } from "react";

import "./Tooltip.css";

export type TooltipPositionTypes = "top" | "right" | "bottom" | "left";

interface ITooltipProps {
    children: ReactNode;
    tooltipContent?: ReactNode;
    className?: string;
    position?: TooltipPositionTypes;
    style?: CSSProperties;
}

const Tooltip = ({ children, tooltipContent, position = "bottom", className = "", style = {} }: ITooltipProps) => {
    return (
        <div className={`tooltip ${position} ${className}`} style={style}>
            {children}
            {tooltipContent && (
                <div className="tooltip-text-container">
                    <div className="tooltip-text">{tooltipContent}</div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
