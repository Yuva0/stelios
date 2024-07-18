export interface ThemeProviderProps {
  children: React.ReactNode;
  accent?: string;
  background?: string;
  gray?: string;
  appearance?: "light" | "dark";
}

export interface DefaultTheme {
  [key: string]: any;
}