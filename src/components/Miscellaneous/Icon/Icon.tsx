import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

import { IconProps } from "./types";

import "./Icon.theme.scss";

const Icon = ({ icon, onClick, className = "", style = {} }: IconProps) => {
  if (!icon) {
    return null;
  }

  return <FontAwesomeIcon style={style} className={classNames("m-icon", className)} icon={icon} onClick={onClick} />;
};

export default Icon;
