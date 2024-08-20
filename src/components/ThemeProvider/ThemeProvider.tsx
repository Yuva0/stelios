import React, { createContext, useContext } from "react";
import {
  DefaultTheme,
  ThemeProviderProps,
  ColorPaletteProps,
} from "./ThemeProvider.types";
import { generateRadixColors } from "../../helpers/colors/generateRadixColors";
import colors_new from "../../tokens/colors_new.json";

const ThemeContext = createContext<DefaultTheme>({
  theme: {
    colorPalette: {
      primary: {
        main: colors_new.primary.accent,
        appearance: colors_new.appearance as "light" | "dark",
        ...generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.primary.accent,
          background:
            colors_new.appearance === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray: colors_new.gray,
        }),
      },
    },
  },
  setTheme: () => {},
});

const useTheme = () => {
  return useContext(ThemeContext);
};
const assignThemeAccent = (
  accent: string,
  appearance: "light" | "dark",
  gray: string
) => {
  return {
    main: accent,
    appearance,
    ...generateRadixColors({
      appearance,
      accent,
      background:
        appearance === "light"
          ? colors_new.light_background
          : colors_new.dark_background,
      gray: gray,
    }),
  } as ColorPaletteProps;
};

const useUpdateTheme = () => {
  const { setTheme } = useTheme();

  return ({
    accent = {
      primary: colors_new.primary.accent,
    },
    gray = colors_new.gray,
    appearance = colors_new.appearance as "light" | "dark",
  }: ThemeProviderProps) => {
    const colorPalette = Object.keys(accent).reduce(
      (palette, key) => {
        return {
          ...palette,
          [key]: assignThemeAccent(accent[key], appearance, gray),
        };
      },
      {} as { [key: string]: ColorPaletteProps }
    );

    return setTheme({
      colorPalette,
    });
  };
};

const ThemeProvider = ({
  accent,
  gray = colors_new.gray,
  appearance = colors_new.appearance as "light" | "dark",
  children,
}: ThemeProviderProps) => {
  const colorPalette = accent ? Object.keys(accent).reduce(
    (palette, key) => {
      return {
        ...palette,
        [key]: assignThemeAccent(accent[key], appearance, gray),
      };
    },
    {} as { [key: string]: ColorPaletteProps }
  ) : null;

  const [theme, setTheme] = React.useState(colorPalette ? {
    colorPalette,
  }: null);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme, useUpdateTheme };
