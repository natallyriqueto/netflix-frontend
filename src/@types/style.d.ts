import 'styled-components';
import { defaultTheme } from '../components/styles/themes/default';

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme<T> extends ThemeType {}
}
