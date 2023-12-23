import type { SpinnerThemeProps } from './spinner/types';

export interface UITheme extends Record<string, unknown> {
  spinner: SpinnerThemeProps;
}
