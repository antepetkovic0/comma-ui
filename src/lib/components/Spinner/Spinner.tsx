import { twMerge } from 'tailwind-merge';
import cx from 'clsx';
import { useTheme } from '../../context/useTheme';
import type { SpinnerProps } from './types';

export const Spinner = ({
  size = 'medium',
  appearance = 'default',
}: SpinnerProps) => {
  const {
    theme: { spinner: theme },
  } = useTheme();

  const classes = twMerge(
    cx(theme.base, theme.appearance[appearance], theme.size[size])
  );

  return <div className={classes} />;
};
