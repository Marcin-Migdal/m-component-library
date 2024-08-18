import React, { useEffect } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { IThemeWrapper } from "./theme-wrapper-interfaces";

import "./componentStyles/checkbox.css";
import "./componentStyles/dropdown.css";
import "./componentStyles/inputLabel.css";
import "./componentStyles/textarea.css";
import "./componentStyles/textfield.css";

import "./componentStyles/alert.css";
import "./componentStyles/button.css";
import "./componentStyles/card.css";
import "./componentStyles/overlay.css";
import "./componentStyles/slider.css";
import "./componentStyles/toast.css";

import "./style.css";

library.add(fas, fab);

const ThemeWrapper = ({ children, theme = "default-theme-light-mode", customWrapperId = "wrapper-root" }: IThemeWrapper) => {
    useEffect(() => {
        document.body.className = `common-wrapper-container ${theme}`;
    }, []);

    return <>{children}</>;
};

export default ThemeWrapper;
