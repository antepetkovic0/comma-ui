import type {
  SpinnerAppearance,
  SpinnerSize,
} from '../../components/Spinner/types';

export interface SpinnerThemeProps {
  base: string;
  appearance: Record<SpinnerAppearance, string>;
  size: Record<SpinnerSize, string>;
}
