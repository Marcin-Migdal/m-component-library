import React from "react";

import { IThemeProps } from "../theme-wrapper-interfaces";

// All component css
import "./checkbox.css";
import "./textarea.css";
import "./button.css";
import "./input.css";

// Wrapper component css
import "./style.css";

export const LightBlueThemeDarkMode = ({ children }: IThemeProps) => (
    <div className="common-wrapper-container light-blue-theme-dark-mode-container">{children}</div>
);
