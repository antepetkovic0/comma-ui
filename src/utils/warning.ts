type Warning = (component: string, message?: string) => void;

function noop() {}

let warning: Warning = noop;

if (process.env.NODE_ENV !== 'production') {
  warning = (component, message) => {
    console.warn(`[commaUI: ${component}] ${message}`);
  };
}

export default warning;
