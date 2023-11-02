type IconName = 'info' | 'success' | 'warning' | 'error' | 'external-link';
export type IconProps = {
    name: IconName;
};
declare const Icon: ({ name }: IconProps) => JSX.Element | null;
export default Icon;
