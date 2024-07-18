import React, { createContext, useContext } from "react";
import { DefaultTheme, ThemeProviderProps } from "./ThemeProvider.types";
import { generateRadixColors } from "../../helpers/colors/generateRadixColors";
import colors_new from "../../tokens/colors_new.json";

const ThemeContext = createContext<DefaultTheme | undefined>(undefined);

const useTheme = () => {
  const context = useContext(ThemeContext);
  return (
    context ?? {
      colorObj: generateRadixColors({
        appearance: colors_new.appearance as "light" | "dark",
        accent: colors_new.primary.accent,
        background: colors_new.background,
        gray: colors_new.gray,
      }),
    }
  );
};

const ThemeProvider = ({
  accent,
  background,
  gray,
  appearance,
  children,
}: ThemeProviderProps) => {
  const colorObj = generateRadixColors({
    appearance: appearance ?? (colors_new.appearance as "light" | "dark"),
    accent: accent ?? colors_new.primary.accent,
    background: background ?? colors_new.background,
    gray: gray ?? colors_new.gray,
  });

  return (
    <ThemeContext.Provider value={{ colorObj }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
