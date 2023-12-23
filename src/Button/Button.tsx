// import { forwardRef } from 'react';
// import { twMerge } from 'tailwind-merge';
// import Spinner, { SpinnerAppearance } from '../lib/components/Spinner';

// type ButtonAppearance = 'primary' | 'secondary' | 'subtle';

// type ButtonType = 'button' | 'submit' | 'reset';

// export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
//   appearance: ButtonAppearance;
//   label: string;
//   onClick: (e: React.MouseEvent<HTMLElement>) => void;
//   disabled?: boolean;
//   isLoading?: boolean;
//   type?: ButtonType;
// };

// const APPEARANCE_MAPS: Record<ButtonAppearance, string> = {
//   primary: 'bg-cui-astral-primary text-white',
//   secondary:
//     'bg-white text-cui-astral-primary border-solid border-[1px] border-cui-astral-primary',
//   subtle: 'text-cui-astral-primary',
// };

// const SPINNER_APPEARANCE_MAPS: Record<ButtonAppearance, SpinnerAppearance> = {
//   primary: 'invert',
//   secondary: 'default',
//   subtle: 'default',
// };

// const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   (
//     {
//       appearance,
//       label,
//       onClick,
//       disabled,
//       isLoading,
//       type = 'button',
//       className,
//       ...props
//     },
//     ref
//   ): JSX.Element => {
//     const finalDisabled = disabled || isLoading;

//     const baseClasses =
//       'flex justify-center items-center shrink-0 rounded-sm py-2 px-3 text-xs uppercase font-semibold tracking-wide';
//     const classes = twMerge(
//       baseClasses,
//       APPEARANCE_MAPS[appearance],
//       className
//     );

//     const content = isLoading ? (
//       <Spinner size="small" appearance={SPINNER_APPEARANCE_MAPS[appearance]} />
//     ) : (
//       label
//     );

//     return (
//       <button
//         ref={ref}
//         type={type}
//         className={classes}
//         onClick={onClick}
//         disabled={finalDisabled}
//         {...props}
//       >
//         {content}
//       </button>
//     );
//   }
// );

// Button.displayName = 'Button';

// export default Button;
