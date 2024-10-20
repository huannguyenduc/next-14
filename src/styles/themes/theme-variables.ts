import 'styled-components';

import { darkColorsTheme } from './dark/index';
import { lightColorsTheme } from './light/index';

export const themeObject = {
  light: lightColorsTheme,
  dark: darkColorsTheme,
} as const;

type Merge<A, B> = { [K in keyof (A | B)]: A[K] | B[K] };

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Merge<typeof lightColorsTheme, typeof darkColorsTheme> {}
}
