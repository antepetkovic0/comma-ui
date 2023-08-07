import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from '../Icon/Icon';

type AlertType = 'info' | 'success' | 'warning' | 'error';

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  type: AlertType;
  children: React.ReactNode;
};

const TYPE_MAPS: Record<AlertType, string> = {
  success: 'bg-cui-success-100 border-cui-success-200',
  info: 'bg-cui-info-100 border-cui-info-200',
  error: 'bg-cui-error-100 border-cui-error-200',
  warning: 'bg-cui-warning-100 border-cui-warning-200',
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ type, children, className, ...props }, ref): JSX.Element => {
    const baseClasses =
      'flex items-start gap-2 p-4 border rounded-sm text-cui-text-primary';
    const classes = twMerge(baseClasses, TYPE_MAPS[type], className);

    return (
      <div role="alert" ref={ref} className={classes} {...props}>
        <div role="presentation">
          <Icon name={type} />
        </div>
        {children}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;
