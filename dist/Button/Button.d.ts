/// <reference types="react" />
type ButtonAppearance = 'primary' | 'secondary' | 'subtle';
type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    appearance: ButtonAppearance;
    label: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
    isLoading?: boolean;
    type?: ButtonType;
};
declare const Button: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLButtonElement> & {
    appearance: ButtonAppearance;
    label: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean | undefined;
    isLoading?: boolean | undefined;
    type?: ButtonType | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
