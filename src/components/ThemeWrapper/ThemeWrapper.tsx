import React from "react";

import { LightBlueThemeLightMode } from "./light-blue-theme-light-mode";
import { LightBlueThemeDarkMode } from "./light-blue-theme-dark-mode";
import { DefaultThemeLightMode } from "./default-theme-light-mode";
import { DefaultThemeDarkMode } from "./default-theme-dark-mode";
import { library } from "@fortawesome/fontawesome-svg-core";
import { IThemeWrapper } from "./theme-wrapper-interfaces";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

library.add(fas, fab);

const ThemeWrapper = ({ children, theme = "default-theme-light-mode", customWrapperId = "wrapper-root" }: IThemeWrapper) => {
    const getTheme = () => {
        switch (theme) {
            case "light-blue-theme-dark-mode":
                return <LightBlueThemeDarkMode children={children} customWrapperId={customWrapperId} />;
            case "light-blue-theme-light-mode":
                return <LightBlueThemeLightMode children={children} customWrapperId={customWrapperId} />;
            case "default-theme-light-mode":
                return <DefaultThemeLightMode children={children} customWrapperId={customWrapperId} />;
            case "default-theme-dark-mode":
                return <DefaultThemeDarkMode children={children} customWrapperId={customWrapperId} />;
        }
    };

    return <>{getTheme()}</>;
};

export default ThemeWrapper;
