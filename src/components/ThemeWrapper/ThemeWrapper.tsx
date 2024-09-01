import React, { useEffect } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ThemeWrapperProps } from "./types";

import "./componentStyles/inputs.css";

import "./componentStyles/alert.css";
import "./componentStyles/card.css";
import "./componentStyles/toast.css";

import "./componentStyles/button.css";
import "./componentStyles/inputLabel.css";
import "./componentStyles/overlay.css";

import "./style.css";

library.add(fas, fab);

const ThemeWrapper = ({ children, theme = "default-theme-light-mode" }: ThemeWrapperProps) => {
    useEffect(() => {
        document.body.className = `common-wrapper-container ${theme}`;
    }, [theme]);

    return <>{children}</>;
};

export default ThemeWrapper;
