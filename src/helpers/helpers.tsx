import { generateRadixColors } from "./colors/generateRadixColors";
import colors from "../tokens/colors.json";
import { ColorPaletteProps, DefaultTheme } from "../components/ThemeProvider/ThemeProvider.types";

export const hasPropertyChain: (props: any, chain: string[]) => boolean = (
  props,
  chain
) => {
  return (
    chain.reduce((acc, key) => {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, props) !== undefined
  );
};

export const getIncrementalGeneratedId = (() => {
  let number = 1;
  return () => {
    return number++;
  };
})();

/* ---------------------------------------------------------------------------
              Fetch colorPalette from theme or generate a new one

- If neither theme nor color is provided, return null
- If theme is provided but not color, return the theme's colorPalette
- If color is provided but not theme, generate a new colorPalette
- If color && theme are provided, 
    return the theme's colorPalette with the new color if it doesn't exist
---------------------------------------------------------------------------- */
export const getColorPalette = (theme?:DefaultTheme["theme"], color?: string | null) => {
  if (!theme && !color) return null;
  if (theme && !color) {
    return theme.colorPalette;
  }
  if(!theme && color) {
    return {
      [color]: {
        main: color,
        appearance: colors.theme.appearance.light,
        ...generateRadixColors({
          accent: color,
          appearance: colors.theme.appearance.light as "light" | "dark",
          gray: colors.theme.gray,
          background: colors.theme.background.light,
        }),
      } as ColorPaletteProps
    };
  }
  if (color && theme) {
    if(theme.colorPalette && theme.colorPalette[color]) {
      return theme.colorPalette;
    }
    return {
      ...theme.colorPalette,
      [color]: {
        main: color,
        appearance: colors.theme.appearance.light,
        ...generateRadixColors({
          accent: color,
          appearance: colors.theme.appearance.light as "light" | "dark",
          gray: colors.theme.gray,
          background: colors.theme.background.light,
        }),
      } as ColorPaletteProps
    }
  }
};
