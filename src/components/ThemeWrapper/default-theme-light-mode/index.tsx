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

export const DefaultThemeLightMode = ({ children, customWrapperId }: IThemeProps) => {
    return (
        <div className="common-wrapper-container default-theme-light-mode-theme" id={customWrapperId}>
            {children}
        </div>
    );
};
