import React from "react";

import { IThemeProps } from "../theme-wrapper-interfaces";
import "./style.css";

export const LightBlueThemeLightMode = ({ children }: IThemeProps) => (
    <div className="light-blue-theme-light-mode-container">{children}</div>
);
