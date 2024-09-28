import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useRef } from "react";

import { Tooltip } from "../Miscellaneous";
import { defaultTooltipConfig, getTooltipPropsConfig } from "../Miscellaneous/Tooltip/helpers/getTooltipPropsConfig";
import { ButtonIconPosition, ButtonProps } from "./types";

import "./Button.css";

const Button = (props: ButtonProps) => {
    const {
        children,
        text,
        onClick,
        disabled = false,
        busy = false,
        display = true,
        icon = undefined,
        iconPosition = ButtonIconPosition.RIGHT,
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

    if (!display) {
        return null;
    }

    const getRightButtonIcon = () => {
        if (busy) {
            return <FontAwesomeIcon className="right-svg" icon="circle-notch" spin />;
        } else if (icon && iconPosition === ButtonIconPosition.RIGHT) {
            <FontAwesomeIcon className="right-svg" icon={icon} />;
        } else {
            return null;
        }
    };

    const tooltipContent = disabled ? disabledTooltip : tooltip;

    return (
        <>
            <button
                ref={ref}
                style={style}
                className={classNames("m-button", variant, className)}
                onClick={(e) => onClick && onClick(e)}
                disabled={disabled || busy}
                type={type}
                {...otherProps}
            >
                {children}
                {icon && iconPosition === ButtonIconPosition.LEFT && <FontAwesomeIcon className="left-svg" icon={icon} />}
                {text}
                {getRightButtonIcon()}
            </button>

            {tooltipContent && (
                <Tooltip targetRef={ref} {...getTooltipPropsConfig(tooltipConfig)}>
                    {tooltipContent}
                </Tooltip>
            )}
        </>
    );
};

export default Button;
