import 'styled-components';
import { theme } from './styles';

type ThemeInterface = typeof theme;

declare module 'styled-components' {
  // tslint:disable-next-line
  export interface DefaultTheme extends ThemeInterface {}
}
