import { useEffect } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ThemeWrapperProps } from "./types";

import "./styles/index.scss";

library.add(fas, fab);

const ThemeWrapper = ({ children, darkMode = false, hue = undefined }: ThemeWrapperProps) => {
  useEffect(() => {
    const setThemeWrapperClassName = () => {
      const modeType = darkMode ? "dark" : "light";
      const themeType = hue !== undefined ? "custom" : "default";

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
