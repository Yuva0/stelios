export interface ThemeProviderProps {
  children?: React.ReactNode;
  accent?: {
    primary?: string;
    secondary?: string;
    danger?: string;
    warning?: string;
    success?: string;
    info?: string;
  };
  background?: string;
  gray?: string;
  appearance?: "light" | "dark";
}

type ArrayOf12<T> = [T, T, T, T, T, T, T, T, T, T, T, T];
type ColorPaletteProps = {
  // Default Colors
  main: string;
  appearance: string;
  
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

export const colorTypes = ["primary", "secondary", "danger", "warning", "success", "info"];

export interface DefaultTheme {
  theme: {
    colorPalette: {
      primary: ColorPaletteProps,
      secondary: ColorPaletteProps,
      danger: ColorPaletteProps,
      warning: ColorPaletteProps,
      success: ColorPaletteProps,
      info: ColorPaletteProps,
    }
  };
  setTheme: any;
}
