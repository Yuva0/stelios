import { generateRadixColors } from "./colors/generateRadixColors";
import colors from "../tokens/colors.json";
import { ColorPaletteProps, DefaultTheme } from "../components/ThemeProvider/ThemeProvider.types";
import { useEffect, useState } from "react";

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

export const isValidColor = (color: string): boolean => {
  const namedColors = [
    "red", "blue", "green", "yellow", "black", "white", "gray", "grey", 
    "orange", "purple", "pink", "brown", "cyan", "magenta", "lime", "maroon",
  ];

  // Regex to match hex codes (#FFF, #FFFFFF)
  const hexColorRegex = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;

  return namedColors.includes(color.toLowerCase()) || hexColorRegex.test(color);
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};
