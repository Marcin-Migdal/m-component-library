import React from "react";

import { IThemeProps } from "../theme-wrapper-interfaces";

// All component css
import "./textarea.css";
import "./checkbox.css";
import "./button.css";
import "./input.css";
import "./dropdown.css";
import "./toast.css";

export const DefaultThemeLightMode = ({ children, customWrapperId }: IThemeProps) => {
    return (
        <div className="common-wrapper-container default-theme-light-mode-container" id={customWrapperId}>
            {children}
        </div>
    );
};
