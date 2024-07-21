export interface ThemeProviderProps {
  children: React.ReactNode;
  accent?: {
    primary?: string;
    secondary?: string;
    danger?: string;
    warning?: string;
    success?: string;
    info?: string;
  };
  background?: string;
  gray?: string;
  appearance?: "light" | "dark";
}

export interface DefaultTheme {
  themeColors: any;
}
