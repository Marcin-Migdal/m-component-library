import React from "react";

import { IThemeProps } from "../theme-wrapper-interfaces";

// All component css
import "./textarea.css";
import "./checkbox.css";
import "./button.css";
import "./input.css";

// Wrapper component css
import "./style.css";

export const LightBlueThemeLightMode = ({ children }: IThemeProps) => (
    <div className="common-wrapper-container light-blue-theme-light-mode-container">{children}</div>
);
