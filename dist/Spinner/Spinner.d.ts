type SpinnerSize = 'small' | 'medium' | 'large';
export type SpinnerAppearance = 'default' | 'invert';
export type SpinnerProps = {
    size?: SpinnerSize;
    appearance?: SpinnerAppearance;
};
declare const Spinner: ({ size, appearance, }: SpinnerProps) => JSX.Element;
export default Spinner;
