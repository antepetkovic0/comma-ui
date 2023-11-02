// import React from 'react';
// import { twMerge } from 'tailwind-merge';

// export type StepProps = React.LiHTMLAttributes<HTMLLIElement> & {
//   isCurrent?: boolean;
// };

// const Step = React.forwardRef<HTMLLIElement, StepProps>(
//   ({ children, isCurrent, className, ...props }, ref): JSX.Element => {
//     const baseClasses =
//       "min-w-64 before:content-[''] before:col-start-1 before:h-1 before:w-full before:bg-green-400";
//     const classes = twMerge(baseClasses, className);
//     console.log(isCurrent);
//     return (
//       <li aria-label="Step" className={classes} ref={ref} {...props}>
//         {children}
//       </li>
//     );
//   }
// );
// export default Step;
