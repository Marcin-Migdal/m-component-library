import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { IconProps } from "./types";

const Icon = ({ icon, onClick, className = "", style = {} }: IconProps) => {
    if (!icon) return <></>;
    return <FontAwesomeIcon style={style} className={className} icon={icon} onClick={onClick} />;
};

export default Icon;
