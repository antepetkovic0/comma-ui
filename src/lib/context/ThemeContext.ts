import { createContext } from 'react';
import { ThemeContextProps } from './types';
import { theme } from '../theme';

export const ThemeContext = createContext<ThemeContextProps>({
  theme,
});
ThemeContext.displayName = 'commaUIThemeContext';
