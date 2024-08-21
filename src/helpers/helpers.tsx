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

export const getColorPalette = (theme?:DefaultTheme["theme"], color?: string) => {
  if(!color) return null;
  if (theme && theme.colorPalette && theme.colorPalette[color]) {
    return theme.colorPalette;
  }
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
    } as ColorPaletteProps,
  };
};
