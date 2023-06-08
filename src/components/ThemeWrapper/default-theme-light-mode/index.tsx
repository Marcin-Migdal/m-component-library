import React from "react";

import { IThemeProps } from "../theme-wrapper-interfaces";

// All component css
import "./textarea.css";
import "./checkbox.css";
import "./button.css";
import "./input.css";

// Wrapper component css
import "./style.css";

export const DefaultThemeLightMode = ({ children }: IThemeProps) => {
    return <div className="common-wrapper-container default-theme-light-mode-container">{children}</div>;
};
