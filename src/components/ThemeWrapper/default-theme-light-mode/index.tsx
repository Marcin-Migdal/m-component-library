import React from "react";

import { IThemeProps } from "../theme-wrapper-interfaces";
import "./style.css";

export const DefaultThemeLightMode = ({ children }: IThemeProps) => {
    console.log("It works");
    return <div className="default-theme-light-mode-container">{children}</div>;
};
