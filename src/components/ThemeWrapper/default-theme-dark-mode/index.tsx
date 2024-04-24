import React from "react";

import { IThemeProps } from "../theme-wrapper-interfaces";

// All component css
import "./button.css";
import "./card.css";
import "./checkbox.css";
import "./dropdown.css";
import "./textarea.css";
import "./textfield.css";
import "./toast.css";

export const DefaultThemeDarkMode = ({ children, customWrapperId }: IThemeProps) => (
    <div className="common-wrapper-container default-theme-dark-mode-theme" id={customWrapperId}>
        {children}
    </div>
);
