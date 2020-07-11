import 'styled-components';
import { ThemeModel } from './models';

declare module 'styled-components' {
  export type DefaultTheme = ThemeModel;
}
