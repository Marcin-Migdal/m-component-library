import { ReactNode } from "react";

export interface IThemeWrapper {
    children: ReactNode;
    theme?: ThemeTypes;
    customWrapperId?: string;
}

export interface IThemeProps {
    children: ReactNode;
    customWrapperId: string;
}

export type ThemeTypes =
    | "default-theme-dark-mode"
    | "default-theme-light-mode"
    | "light-blue-theme-dark-mode"
    | "light-blue-theme-light-mode"
    | "light-purple-theme-dark-mode"
    | "light-purple-theme-light-mode";
