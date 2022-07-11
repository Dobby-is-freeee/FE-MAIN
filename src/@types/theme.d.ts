import 'styled-components';

import { ThemeType } from '@/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
