import React from "react";

import { LightBlueThemeDarkMode } from "./light-blue-theme-dark-mode";
import { DefaultThemeLightMode } from "./default-theme-light-mode";
import { IThemeWrapper } from "./theme-wrapper-interfaces";

const ThemeWrapper = ({ children, theme = "default-theme-light-mode" }: IThemeWrapper) => {
    const getTheme = () => {
        switch (theme) {
            case "light-blue-theme-dark-mode":
                return <LightBlueThemeDarkMode children={children} />;
            default:
                return <DefaultThemeLightMode children={children} />;
        }
    };

    return <>{getTheme()}</>;
};

export default ThemeWrapper;
