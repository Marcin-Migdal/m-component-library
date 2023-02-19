import React, { useEffect, useState } from "react";

import { IThemeWrapper } from "./theme-wrapper-interfaces";

const ThemeWrapper = ({ children, theme = "default-theme-light-mode" }: IThemeWrapper) => {
    const [themeComponent, setThemeComponent] = useState<any | undefined>(undefined);

    useEffect(() => {
        const getTheme = async () =>
            import(`./${theme}/index`).then((ThemeComponent) => {
                console.log(ThemeComponent);
                setThemeComponent(ThemeComponent);
            });

        getTheme();
    }, [theme]);

    if (!themeComponent) return <>{console.log("nie dziala")}nie dziala</>;
    return <>{themeComponent[Object.keys(themeComponent)[0]]({ children: children })}</>;
};

export default ThemeWrapper;
