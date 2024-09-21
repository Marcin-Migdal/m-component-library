import { useEffect } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ThemeWrapperProps } from "./types";

import "./componentStyles/inputs.css";
import "./componentStyles/inputsErrors.css";

import "./componentStyles/alert.css";
import "./componentStyles/card.css";
import "./componentStyles/toast.css";

import "./componentStyles/button.css";
import "./componentStyles/inputLabel.css";
import "./componentStyles/overlay.css";

import "./componentStyles/miscellaneous.css";

import "./style.css";

library.add(fas, fab);

const ThemeWrapper = ({ children, darkMode = false, hue = undefined }: ThemeWrapperProps) => {
    useEffect(() => {
        const setThemeWrapperClassName = () => {
            const modeType = darkMode ? "dark" : "light";
            const themeType = hue !== undefined ? "custom" : "grey";

            document.body.className = `common-wrapper-container ${modeType}-mode ${`${modeType}-${themeType}-theme`}`;
        };

        const setThemeWrapperHslProperties = () => {
            if (hue) {
                document.body.style.setProperty("--hue", `${hue}`);
            }
        };

        setThemeWrapperClassName();
        setThemeWrapperHslProperties();
    }, [darkMode, hue]);

    return children;
};

export default ThemeWrapper;
