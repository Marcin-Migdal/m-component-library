import React from "react";

import { IThemeProps } from "../theme-wrapper-interfaces";

// All component css
import "./checkbox.css";
import "./textarea.css";
import "./button.css";
import "./input.css";
import "./dropdown.css";
import "./toast.css";

// Wrapper component css
import "./color-variables.css";

export const LightBlueThemeDarkMode = ({ children, customWrapperId }: IThemeProps) => (
    <div className="common-wrapper-container light-blue-theme-dark-mode-container" id={customWrapperId}>
        {children}
    </div>
);
