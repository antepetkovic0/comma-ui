const e = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cui-text": {
          primary: "#1b1b1a",
          secondary: "#545452",
          tertiary: "#72716f",
          subdued: "#a6a5a2"
        },
        "cui-astral": {
          primary: "#2e7899",
          secondary: "#2a638f",
          tertiary: "#074058",
          quaternary: "#5d72c2"
        },
        "cui-success": {
          100: "#ebf5f1",
          200: "#b6d1c6",
          300: "#208560"
        },
        "cui-info": {
          100: "#e8efff",
          200: "#b9c7eb",
          300: "#3950ad"
        },
        "cui-error": {
          100: "#fff0f1",
          200: "#facfd4",
          300: "#cf182e"
        },
        "cui-warning": {
          100: "#fff8e3",
          200: "#ffe299",
          300: "#ad7410"
        }
      }
    }
  },
  plugins: []
};
export {
  e as default
};
