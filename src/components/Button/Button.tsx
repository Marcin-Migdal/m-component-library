import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { IButtonProps } from "./button-interfaces";
import Tooltip from "../Tooltip";

import "./Button.css";

const Button = (props: IButtonProps) => {
    const {
        children,
        text,
        onClick,
        disabled = false,
        busy = false,
        display = true,
        icon = undefined,
        iconPosition = "right",
        className = "",
        style = {},
        type = "button",
        variant = "outlined",
        tooltip = "",
        disabledTooltip = "",
        tooltipPosition = "bottom",
    } = props;

    if (!display) return <></>;

    return (
        <Tooltip tooltipContent={disabled ? disabledTooltip : tooltip} position={tooltipPosition} className="button-tooltip">
            <button
                style={style}
                className={`m-button ${variant} ${className}`}
                onClick={(e) => {
                    onClick && onClick(e);
                }}
                disabled={disabled || busy}
                type={type}
            >
                {children}
                {icon && iconPosition == "left" && <FontAwesomeIcon className="left-svg" icon={icon} />}
                {text}
                {busy ? (
                    <FontAwesomeIcon className="right-svg" icon="circle-notch" spin />
                ) : icon && iconPosition == "right" ? (
                    <FontAwesomeIcon className="right-svg" icon={icon} />
                ) : (
                    <></>
                )}
            </button>
        </Tooltip>
    );
};

export default Button;
