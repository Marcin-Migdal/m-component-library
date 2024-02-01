import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, MouseEventHandler } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
    icon?: IconProp;
    onClick?: MouseEventHandler<SVGElement>;
    className?: string;
    style?: CSSProperties;
}

const Icon = ({ icon, onClick, className = "", style = {} }: IconProps) => {
    if (!icon) return <></>;
    return <FontAwesomeIcon style={style} className={className} icon={icon} onClick={onClick} />;
};

export default Icon;
