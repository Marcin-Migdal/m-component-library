import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { IconProps } from "./types";

const Icon = ({ icon, onClick, className = "", style = {} }: IconProps) => {
    if (!icon) {
        return null;
    }

    return <FontAwesomeIcon style={style} className={`m-icon ${className}`} icon={icon} onClick={onClick} />;
};

export default Icon;
