import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from '../Icon';

export type AnchorProps = React.HTMLAttributes<HTMLAnchorElement> & {
  url: string;
  isExternal?: boolean;
  openInNewTab?: boolean;
  children: React.ReactNode;
};

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    { url, isExternal, openInNewTab, children, className, ...props },
    ref
  ): JSX.Element => {
    const baseClasses =
      'inline-flex flex-row items-center gap-1 text-sm font-semibold underline underline-offset-2 text-cui-astral-primary fill-cui-astral-primary outline-none focus-visible:ring-2 focus-visible:ring-cui-astral-quaternary focus:text-cui-astral-secondary focus:fill-cui-astral-secondary hover:text-cui-astral-secondary hover:fill-cui-astral-secondary active:text-cui-astral-tertiary active:fill-cui-astral-tertiary rounded-sm transition-colors duration-200';
    const classes = twMerge(baseClasses, className);

    return (
      <a
        ref={ref}
        href={url}
        className={classes}
        target={openInNewTab ? '_blank' : undefined}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
        {isExternal && <Icon name="external-link" />}
      </a>
    );
  }
);

Anchor.displayName = 'Anchor';

export default Anchor;
