import React from "react";

import { IThemeProps } from "../themes-interfaces";
import "./style.css";

export const LightBlueThemeLightMode = ({ children }: IThemeProps) => (
    <div className="light-blue-theme-light-mode-container">{children}</div>
);
