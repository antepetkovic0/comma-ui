import React from 'react';
type AlertType = 'info' | 'success' | 'warning' | 'error';
export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
    type: AlertType;
    children: React.ReactNode;
};
declare const Alert: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    type: AlertType;
    children: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default Alert;
