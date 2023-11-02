import React from 'react';
export type AnchorProps = React.HTMLAttributes<HTMLAnchorElement> & {
    url: string;
    isExternal?: boolean;
    openInNewTab?: boolean;
    children: React.ReactNode;
};
declare const Anchor: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLAnchorElement> & {
    url: string;
    isExternal?: boolean | undefined;
    openInNewTab?: boolean | undefined;
    children: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>>;
export default Anchor;
