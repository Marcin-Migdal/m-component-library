import React, { useEffect, useState } from "react";

import { IThemeWrapper } from "./theme-wrapper-interfaces";

const ThemeWrapper = ({ children, theme = "default-theme-light-mode" }: IThemeWrapper) => {
    const [ThemeComponent, setThemeComponent] = useState<any | undefined>(undefined);

    useEffect(() => {
        const getTheme = async () => import(`./${theme}/index`).then((ThemeComponent) => setThemeComponent(ThemeComponent));

        getTheme();
    }, [theme]);

    if (!ThemeComponent) return <></>;
    return <>{ThemeComponent[Object.keys(ThemeComponent)[0]]({ children: children })}</>;
};

export default ThemeWrapper;
