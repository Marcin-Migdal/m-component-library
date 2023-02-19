import React from "react";

import { LightBlueThemeLightMode } from "./light-blue-theme-light-mode";
import { LightBlueThemeDarkMode } from "./light-blue-theme-dark-mode";
import { DefaultThemeLightMode } from "./default-theme-light-mode";
import { DefaultThemeDarkMode } from "./default-theme-dark-mode";
import { IThemeWrapper } from "./theme-wrapper-interfaces";

const ThemeWrapperDifferentVersion = ({ children, theme = "default-theme-light-mode" }: IThemeWrapper) => {
    const getTheme = () => {
        switch (theme) {
            case "default-theme-light-mode":
                return <DefaultThemeLightMode>{children}</DefaultThemeLightMode>;
            case "default-theme-dark-mode":
                return <DefaultThemeDarkMode>{children}</DefaultThemeDarkMode>;
            case "light-blue-theme-light-mode":
                return <LightBlueThemeLightMode>{children}</LightBlueThemeLightMode>;
            case "light-blue-theme-dark-mode":
                return <LightBlueThemeDarkMode>{children}</LightBlueThemeDarkMode>;
        }
    };

    return <>{getTheme()}</>;
};

export default ThemeWrapperDifferentVersion;
