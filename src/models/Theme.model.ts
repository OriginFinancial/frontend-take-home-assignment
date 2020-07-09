export interface ThemeModel {
  colors: {
    primary: {
      extralight: string;
      light: string;
      main: string;
      dark: string;
    };
    secondary: {
      main: string;
    };
    text: {
      main: string;
      light: string;
    };
    white: string;
    dark: string;
    black: string;
    none: string;
  };

  media: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
