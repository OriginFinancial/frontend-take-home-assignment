import 'styled-components';
import { ThemeModel } from './models';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeModel {}
}
