export interface IThemeWrapper {
    children: any;
    theme?: ThemeTypes;
    customWrapperId?: string;
}

export interface IThemeProps {
    children: any;
    customWrapperId: string;
}

export type ThemeTypes =
    | "default-theme-dark-mode"
    | "default-theme-light-mode"
    | "light-blue-theme-dark-mode"
    | "light-blue-theme-light-mode";
