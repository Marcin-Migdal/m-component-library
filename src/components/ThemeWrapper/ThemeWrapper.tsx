import React, { useEffect, useState } from "react";

import { IThemeWrapper } from "./theme-wrapper-interfaces";

const ThemeWrapper = ({ children, theme = "default-theme-light-mode" }: IThemeWrapper) => {
    const [ThemeComponent, setThemeComponent] = useState<any | undefined>(undefined);

    useEffect(() => {
        const getTheme = async () =>
            import(`./${theme}/index`).then((ThemeComponent) => {
                console.log("getTheme 1");
                console.log(ThemeComponent);
                console.log("getTheme 2");
                setThemeComponent(ThemeComponent);
            });

        getTheme();
    }, [theme]);

    if (!ThemeComponent) return <>{console.log("nie dziala")}nie dziala</>;
    return <>{ThemeComponent[Object.keys(ThemeComponent)[0]]({ children: children })}</>;
};

export default ThemeWrapper;
