import { ReactNode } from "react";

export type ThemeWrapperProps = {
    children: ReactNode;
    theme?: ThemeTypes;
};

export type ThemeTypes =
    | "default-theme-dark-mode"
    | "default-theme-light-mode"
    | "light-blue-theme-dark-mode"
    | "light-blue-theme-light-mode"
    | "light-purple-theme-dark-mode"
    | "light-purple-theme-light-mode";
