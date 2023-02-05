import React from "react";

import { IThemeProps } from "../themes-interfaces";
import "./style.css";

export const DefaultThemeLightMode = ({ children }: IThemeProps) => <div className="default-theme-light-mode-container">{children}</div>;
