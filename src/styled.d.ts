import 'styled-components';
import { theme } from './styles';

type ThemeInterface = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
