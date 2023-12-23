import type { HTMLAttributes, ReactNode } from 'react';
import type { UITheme } from '../theme/types';

export interface ThemeContextProps {
  theme: UITheme;
}

export interface ThemeProviderProps extends HTMLAttributes<HTMLDivElement> {
  value: ThemeContextProps;
  children: ReactNode;
}
