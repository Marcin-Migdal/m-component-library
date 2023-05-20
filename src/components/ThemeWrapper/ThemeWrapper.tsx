import React from "react";

import { LightBlueThemeLightMode } from "./light-blue-theme-light-mode";
import { LightBlueThemeDarkMode } from "./light-blue-theme-dark-mode";
import { DefaultThemeLightMode } from "./default-theme-light-mode";
import { DefaultThemeDarkMode } from "./default-theme-dark-mode";
import { IThemeWrapper } from "./theme-wrapper-interfaces";

import "./style.css";

const ThemeWrapper = ({ children, theme = "default-theme-light-mode" }: IThemeWrapper) => {
    const getTheme = () => {
        switch (theme) {
            case "light-blue-theme-dark-mode":
                return <LightBlueThemeDarkMode children={children} />;
            case "light-blue-theme-light-mode":
                return <LightBlueThemeLightMode children={children} />;
            case "default-theme-light-mode":
                return <DefaultThemeLightMode children={children} />;
            case "default-theme-dark-mode":
                return <DefaultThemeDarkMode children={children} />;
        }
    };

    return <>{getTheme()}</>;
};

export default ThemeWrapper;
