import React, { CSSProperties, ReactNode } from "react";

import "./Tooltip.css";

export type TooltipPositionTypes = "top" | "right" | "bottom" | "left";

interface ITooltipProps {
    children: ReactNode;
    text?: string;
    className?: string;
    position?: TooltipPositionTypes;
    style?: CSSProperties;
}

const Tooltip = ({ children, text, position = "bottom", className = "", style = {} }: ITooltipProps) => {
    return (
        <div className={`tooltip ${position} ${className}`} style={style}>
            {children}
            {text && (
                <div className="tooltip-text-container">
                    <div className="tooltip-text">{text}</div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
