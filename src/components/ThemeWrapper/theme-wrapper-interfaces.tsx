export interface IThemeWrapper {
    children: any;
    theme?: ThemeTypes;
}

export interface IThemeProps {
    children: any;
}

type ThemeTypes = "default-theme-dark-mode" | "default-theme-light-mode" | "light-blue-theme-dark-mode" | "light-blue-theme-light-mode";
