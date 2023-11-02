// import React from 'react';
// import { twMerge } from 'tailwind-merge';

// import Step from './Step';

// export type StepsProps = React.HTMLAttributes<HTMLUListElement> & {
//   current: number;
// };

// const Steps = React.forwardRef<HTMLUListElement, StepsProps>(
//   ({ current, children, className, ...props }, ref): JSX.Element => {
//     const baseClasses = 'inline-grid grid-flow-col';
//     const classes = twMerge(baseClasses, className);

//     const childrenWithCurrentProp = React.Children.map(
//       children,
//       (child, idx) => {
//         if (React.isValidElement(child)) {
//           return React.cloneElement(child, { isCurrent: current === idx });
//         }

//         return child;
//       }
//     );

//     return (
//       <ul
//         aria-label="Steps"
//         role="group"
//         ref={ref}
//         className={classes}
//         {...props}
//       >
//         {childrenWithCurrentProp}
//       </ul>
//     );
//   }
// );

// export default Object.assign(Steps, { Step });
