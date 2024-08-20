import React, { createContext, useContext } from "react";
import {
  DefaultTheme,
  ThemeProviderProps,
  ColorPaletteProps,
} from "./ThemeProvider.types";
import { generateRadixColors } from "../../helpers/colors/generateRadixColors";
import colors from "../../tokens/colors.json";

const ThemeContext = createContext<DefaultTheme>({
  theme: null,
  setTheme: () => {},
});

const useTheme = () => {
  return useContext(ThemeContext);
};
const useUpdateTheme = () => {
  const { setTheme } = useTheme();

  return ({
    accents,
    gray = colors.color.theme.gray,
    appearance = colors.color.theme.appearance.light as "light" | "dark",
  }: ThemeProviderProps) => {

    const colorPalette = assignColorPalette(accents, appearance, gray);

    return setTheme(colorPalette ? {
      colorPalette
    } : null);
  };
};

const ThemeProvider = ({
  accents,
  gray = colors.color.theme.gray,
  appearance = colors.color.theme.appearance.light as "light" | "dark",
  children,
}: ThemeProviderProps) => {
  const colorPalette = assignColorPalette(accents, appearance, gray);

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

const assignThemeAccent = (
  accent: string,
  appearance: "light" | "dark",
  gray: string
) => {
  return {
    main: accent,appearance,
    ...generateRadixColors({
      appearance, accent, gray,
      background: appearance === "light" ? colors.color.theme.background.light : colors.color.theme.background.dark,
    }),
  };
};
const assignColorPalette = (
  accents: ThemeProviderProps["accents"],
  appearance: Exclude<ThemeProviderProps["appearance"], undefined>,
  gray: Exclude<ThemeProviderProps["gray"], undefined>
) => {
  return accents ? Object.keys(accents).reduce((palette, key) => {
      return { ...palette, [key]: assignThemeAccent(accents[key], appearance, gray)};
    },
    {} as { [key: string]: ColorPaletteProps }
  ) : null;
}