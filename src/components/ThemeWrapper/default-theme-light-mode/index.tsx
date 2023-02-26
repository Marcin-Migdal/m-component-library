import React from "react";

import { IThemeProps } from "../theme-wrapper-interfaces";
import "./style.css";

export const DefaultThemeLightMode = ({ children }: IThemeProps) => {
    return <div className="default-theme-light-mode-container">{children}</div>;
};
