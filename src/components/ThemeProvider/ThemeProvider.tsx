import React, { createContext, useContext } from "react";
import { DefaultTheme, ThemeProviderProps } from "./ThemeProvider.types";
import { generateRadixColors } from "../../helpers/colors/generateRadixColors";
import colors_new from "../../tokens/colors_new.json";

const ThemeContext = createContext<DefaultTheme>({
  theme: {
    paletteColors: {
      primary: {
        main: colors_new.primary.accent,
        appearance: colors_new.appearance as "light" | "dark",
        ...generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.primary.accent,
          background:
            (colors_new.appearance as "light" | "dark") === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray: colors_new.gray,
        }),
      },
      secondary: {
        main: colors_new.secondary.accent,
        appearance: colors_new.appearance as "light" | "dark",
        ...generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.secondary.accent,
          background:
            (colors_new.appearance as "light" | "dark") === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray: colors_new.gray,
        }),
      },
      danger: {
        main: colors_new.danger.accent,
        appearance: colors_new.appearance as "light" | "dark",
        ...generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.danger.accent,
          background:
            (colors_new.appearance as "light" | "dark") === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray: colors_new.gray,
        }),
      },
      warning: {
        main: colors_new.warning.accent,
        appearance: colors_new.appearance as "light" | "dark",
        ...generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.warning.accent,
          background:
            (colors_new.appearance as "light" | "dark") === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray: colors_new.gray,
        }),
      },
      success: {
        main: colors_new.success.accent,
        appearance: colors_new.appearance as "light" | "dark",
        ...generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.success.accent,
          background:
            (colors_new.appearance as "light" | "dark") === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray: colors_new.gray,
        }),
      },
      info: {
        main: colors_new.info.accent,
        appearance: colors_new.appearance as "light" | "dark",
        ...generateRadixColors({
          appearance: colors_new.appearance as "light" | "dark",
          accent: colors_new.info.accent,
          background:
            (colors_new.appearance as "light" | "dark") === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray: colors_new.gray,
        }),
      },
    },
  },
  setTheme: {},
});

const useTheme = () => {
  return useContext(ThemeContext);
};
const useUpdateTheme = () => {
  const { setTheme } = useTheme();

  return ({
    accent = {
      primary: colors_new.primary.accent,
      secondary: colors_new.secondary.accent,
      danger: colors_new.danger.accent,
      warning: colors_new.warning.accent,
      success: colors_new.success.accent,
      info: colors_new.info.accent,
    },
    gray = colors_new.gray,
    appearance = colors_new.appearance as "light" | "dark",
    background = (colors_new.appearance as "light" | "dark") === "light"
      ? colors_new.light_background
      : colors_new.dark_background,
  }: ThemeProviderProps) =>
    setTheme({
      paletteColors: {
        primary: {
          main: accent["primary"] ?? colors_new.primary.accent,
          appearance: appearance,
          ...generateRadixColors({
            appearance,
            accent: accent["primary"] ?? colors_new.primary.accent,
            background: background,
            gray,
          }),
        },
        secondary: {
          main: accent["secondary"] ?? colors_new.secondary.accent,
          appearance: appearance,
          ...generateRadixColors({
            appearance,
            accent: accent["secondary"] ?? colors_new.secondary.accent,
            background,
            gray,
          }),
        },
        danger: {
          main: accent["danger"] ?? colors_new.danger.accent,
          appearance: appearance,
          ...generateRadixColors({
            appearance,
            accent: accent["danger"] ?? colors_new.danger.accent,
            background,
            gray,
          }),
        },
        warning: {
          main: accent["warning"] ?? colors_new.warning.accent,
          appearance: appearance,
          ...generateRadixColors({
            appearance,
            accent: accent["warning"] ?? colors_new.warning.accent,
            background,
            gray,
          }),
        },
        success: {
          main: accent["success"] ?? colors_new.success.accent,
          appearance: appearance,
          ...generateRadixColors({
            appearance,
            accent: accent["success"] ?? colors_new.success.accent,
            background,
            gray,
          }),
        },
        info: {
          main: accent["info"] ?? colors_new.info.accent,
          appearance: appearance,
          ...generateRadixColors({
            appearance,
            accent: accent["info"] ?? colors_new.info.accent,
            background,
            gray,
          }),
        },
      },
    });
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
  gray = colors_new.gray,
  appearance = colors_new.appearance as "light" | "dark",
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState({
    paletteColors: {
      primary: {
        main: accent["primary"] ?? colors_new.primary.accent,
        appearance,
        ...generateRadixColors({
          appearance,
          accent: accent["primary"] ?? colors_new.primary.accent,
          background:
            appearance === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray,
        }),
      },
      secondary: {
        main: accent["secondary"] ?? colors_new.secondary.accent,
        appearance,
        ...generateRadixColors({
          appearance,
          accent: accent["secondary"] ?? colors_new.secondary.accent,
          background:
            appearance === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray,
        }),
      },
      danger: {
        main: accent["danger"] ?? colors_new.danger.accent,
        appearance,
        ...generateRadixColors({
          appearance,
          accent: accent["danger"] ?? colors_new.danger.accent,
          background:
            appearance === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray,
        }),
      },
      warning: {
        main: accent["warning"] ?? colors_new.warning.accent,
        appearance,
        ...generateRadixColors({
          appearance,
          accent: accent["warning"] ?? colors_new.warning.accent,
          background:
            appearance === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray,
        }),
      },
      success: {
        main: accent["success"] ?? colors_new.success.accent,
        appearance,
        ...generateRadixColors({
          appearance,
          accent: accent["success"] ?? colors_new.success.accent,
          background:
            appearance === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray,
        }),
      },
      info: {
        main: accent["info"] ?? colors_new.info.accent,
        appearance,
        ...generateRadixColors({
          appearance,
          accent: accent["info"] ?? colors_new.info.accent,
          background:
            appearance === "light"
              ? colors_new.light_background
              : colors_new.dark_background,
          gray,
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

export { ThemeProvider, useTheme, useUpdateTheme };
