import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";

import Tooltip from "../Tooltip";
import { defaultTooltipConfig, getTooltipPropsConfig } from "../Tooltip/helpers/getTooltipPropsConfig";
import { IButtonProps } from "./button-interfaces";

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
        tooltipConfig = defaultTooltipConfig,
        ...otherProps
    } = props;

    const ref = useRef<HTMLButtonElement>(null);

    if (!display) return <></>;

    const tooltipContent = disabled ? disabledTooltip : tooltip;

    return (
        <>
            <button
                ref={ref}
                style={style}
                className={`m-button ${variant} ${className}`}
                onClick={(e) => onClick && onClick(e)}
                disabled={disabled || busy}
                type={type}
                {...otherProps}
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

            {tooltipContent && <Tooltip targetRef={ref} children={tooltipContent} {...getTooltipPropsConfig(tooltipConfig)} />}
        </>
    );
};

export default Button;
