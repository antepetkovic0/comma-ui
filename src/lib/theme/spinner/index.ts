import type { SpinnerThemeProps } from './types';

export const spinner: SpinnerThemeProps = {
  base: 'rounded-full animate-spin',
  appearance: {
    default: 'border-brand-100/30 border-t-brand-100',
    invert: 'border-[#c4c4c2]/30 border-t-white',
  },
  size: {
    large: 'w-16 h-16 border-8',
    medium: 'w-8 h-8 border-4',
    small: 'w-4 h-4 border-2',
  },
};
