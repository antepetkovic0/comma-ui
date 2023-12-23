import preset from './dist/comma-ui-tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: ['./src/lib/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
