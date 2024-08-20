export interface ThemeProviderProps {
  children?: React.ReactNode;
  accents?: {
    [key: string]: string;
  };
  background?: string;
  gray?: string;
  appearance?: "light" | "dark";
}

type ArrayOf12<T> = [T, T, T, T, T, T, T, T, T, T, T, T];
export type ColorPaletteProps = {
  // Default Colors
  main: string;
  appearance: "light" | "dark";
  
  // Radix Colors
  accentContrast: string;
  accentScale: ArrayOf12<string>;
  accentScaleAlpha: ArrayOf12<string>;
  accentScaleWideGamut: ArrayOf12<string>;
  accentScaleAlphaWideGamut: ArrayOf12<string>;
  
  grayScale: ArrayOf12<string>;
  grayScaleAlpha: ArrayOf12<string>;
  grayScaleWideGamut: ArrayOf12<string>;
  grayScaleAlphaWideGamut: ArrayOf12<string>;
  
  graySurface: string;
  graySurfaceWideGamut: string;
  
  accentSurface: string;
  accentSurfaceWideGamut: string;
  
  background: string;
}

export interface DefaultTheme {
  theme: {
    colorPalette: {
      [key: string]: ColorPaletteProps
    }
  } | null;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme["theme"]>>;
}
