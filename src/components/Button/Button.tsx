import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";

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

    const ref = useRef<HTMLButtonElement>(null);

    if (!display) return <></>;

    const tooltipText = disabled ? disabledTooltip : tooltip;

    return (
        <>
            <button
                ref={ref}
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

            {tooltipText && (
                <Tooltip targetRef={ref} position={tooltipPosition}>
                    {tooltipText}
                </Tooltip>
            )}
        </>
    );
};

export default Button;
