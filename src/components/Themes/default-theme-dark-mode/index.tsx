import React from "react";

import { IThemeProps } from "../themes-interfaces";
import "./style.css";

export const DefaultThemeDarkMode = ({ children }: IThemeProps) => <div className="default-theme-dark-mode-container">{children}</div>;
