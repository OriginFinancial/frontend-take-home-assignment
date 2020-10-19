import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      mainColor: string;
      secondaryColor: string;
      titleColor: string;
      highlightColor: string;
    };
    buttons: {
      default: string;
    };
    breakpoints: {
      md: string;
    };
    page: {
      backgroundColor: string;
    };
  }
}
