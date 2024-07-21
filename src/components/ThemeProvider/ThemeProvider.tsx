import React, { createContext, useContext, useCallback } from "react";
import { DefaultTheme, ThemeProviderProps } from "./ThemeProvider.types";
import { generateRadixColors } from "../../helpers/colors/generateRadixColors";
import colors_new from "../../tokens/colors_new.json";

interface ThemeContextType {
  theme: DefaultTheme;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({
  accent = {
    primary: colors_new.primary.accent,
    secondary: colors_new.secondary.accent,
    danger: colors_new.danger.accent,
    warning: colors_new.warning.accent,
    success: colors_new.success.accent,
    info: colors_new.info.accent,
  },
  background = colors_new.background,
  gray = colors_new.gray,
  appearance = colors_new.appearance as "light" | "dark",
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<DefaultTheme>({
    themeColors: {
      primary: {
        main: accent["primary"] ?? colors_new.primary.accent,
        ...generateRadixColors({
          appearance,
          accent: accent["primary"] ?? colors_new.primary.accent,
          gray,
          background,
        }),
      },
      secondary: {
        main: accent["secondary"] ?? colors_new.secondary.accent,
        ...generateRadixColors({
          appearance,
          accent: accent["secondary"] ?? colors_new.secondary.accent,
          gray,
          background,
        }),
      },
      danger: {
        main: accent["danger"] ?? colors_new.danger.accent,
        ...generateRadixColors({
          appearance,
          accent: accent["danger"] ?? colors_new.danger.accent,
          gray,
          background,
        }),
      },
      warning: {
        main: accent["warning"] ?? colors_new.warning.accent,
        ...generateRadixColors({
          appearance,
          accent: accent["warning"] ?? colors_new.warning.accent,
          gray,
          background,
        }),
      },
      success: {
        main: accent["success"] ?? colors_new.success.accent,
        ...generateRadixColors({
          appearance,
          accent: accent["success"] ?? colors_new.success.accent,
          gray,
          background,
        }),
      },
      info: {
        main: accent["info"] ?? colors_new.info.accent,
        ...generateRadixColors({
          appearance,
          accent: accent["info"] ?? colors_new.info.accent,
          gray,
          background,
        }),
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme};
