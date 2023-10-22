import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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
        type = undefined,
        variant = "outlined",
    } = props;

    if (!display) return <></>;

    return (
        <button style={style} className={`${className} ${variant}`} onClick={(e) => onClick(e)} disabled={disabled || busy} type={type}>
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
    );
};

export default Button;
