import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEvent } from "react";
import "./Button.css";

type PositionType = "left" | "right";

export interface IButtonProps {
    label: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    busy?: boolean;
    display?: boolean;
    icon?: IconProp;
    iconPosition?: PositionType;
    className?: string;
}

const Button = (props: IButtonProps) => {
    const {
        label,
        onClick,
        disabled = false,
        busy = false,
        display = true,
        icon = undefined,
        iconPosition = "right",
        className = "",
    } = props;

    if (!display) return <></>;

    return (
        <button className={`${className}`} onClick={(e) => onClick(e)} disabled={disabled || busy}>
            {icon && iconPosition == "left" && <FontAwesomeIcon className="left-svg" icon={icon} />}
            {label}
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
