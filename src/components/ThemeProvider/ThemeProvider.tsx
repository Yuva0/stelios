import React, { createContext, useContext } from "react";
import { DefaultTheme, ThemeProviderProps } from "./ThemeProvider.types";
import { generateRadixColors } from "../../helpers/colors/generateRadixColors";
import colors_new from "../../tokens/colors_new.json";

const ThemeContext = createContext<DefaultTheme | undefined>(undefined);

const useTheme = () => {
  const context = useContext(ThemeContext);
  return (
    context ?? {
      colorGradient: {
        primary: generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.primary.accent,
          background: colors_new.background,
          gray: colors_new.gray,
        }),
        secondary: generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.secondary.accent,
          background: colors_new.background,
          gray: colors_new.gray,
        }),
        danger: generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.danger.accent,
          background: colors_new.background,
          gray: colors_new.gray,
        }),
        warning: generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.warning.accent,
          background: colors_new.background,
          gray: colors_new.gray,
        }),
        success: generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.success.accent,
          background: colors_new.background,
          gray: colors_new.gray,
        }),
        info: generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.info.accent,
          background: colors_new.background,
          gray: colors_new.gray,
        }),
      },
    }
  );
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
  const primary = generateRadixColors({
    appearance,
    accent: accent["primary"] ?? colors_new.primary.accent,
    gray,
    background,
  });

  const secondary = generateRadixColors({
    appearance,
    accent: accent["secondary"] ?? colors_new.secondary.accent,
    gray,
    background,
  });

  const danger = generateRadixColors({
    appearance,
    accent: accent["danger"] ?? colors_new.danger.accent,
    gray,
    background,
  });

  const warning = generateRadixColors({
    appearance,
    accent: accent["warning"] ?? colors_new.warning.accent,
    gray,
    background,
  });

  const success = generateRadixColors({
    appearance,
    accent: accent["success"] ?? colors_new.success.accent,
    gray,
    background,
  });

  const info = generateRadixColors({
    appearance,
    accent: accent["info"] ?? colors_new.info.accent,
    gray,
    background,
  });

  const colorGradient = {
    primary,
    secondary,
    danger,
    warning,
    success,
    info,
  };

  return (
    <ThemeContext.Provider value={{ colorGradient }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
