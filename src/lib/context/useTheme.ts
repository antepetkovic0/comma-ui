import { useContext } from 'react';
import type { ThemeContextProps } from './types';
import { ThemeContext } from './ThemeContext';

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
