import 'tailwindcss/tailwind.css';

export { default as Spinner } from './Spinner';
import {
  SpinnerAppearance as TSpinnerAppearance,
  SpinnerProps as TSpinnerProps,
} from './Spinner';
export type SpinnerAppearance = TSpinnerAppearance;
export type SpinnerProps = TSpinnerProps;

export { default as Alert } from './Alert';
import { AlertProps as TAlertProps } from './Alert';
export type AlertProps = TAlertProps;
