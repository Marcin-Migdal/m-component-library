import React from "react";

import { IThemeProps } from "../theme-wrapper-interfaces";

// All component css
import "./checkbox.css";
import "./textarea.css";
import "./button.css";
import "./input.css";
import "./dropdown.css";
import "./toast.css";
import "./card.css";

export const DefaultThemeDarkMode = ({ children, customWrapperId }: IThemeProps) => (
    <div className="common-wrapper-container default-theme-dark-mode-theme" id={customWrapperId}>
        {children}
    </div>
);
