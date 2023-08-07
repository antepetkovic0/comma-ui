import { noop } from './noop';

type Warning = (component: string, message?: string) => void;

let warning: Warning = noop;

if (process.env.NODE_ENV !== 'production') {
  warning = (component, message) => {
    console.warn(`[commaUI: ${component}] ${message}`);
  };
}

export default warning;
