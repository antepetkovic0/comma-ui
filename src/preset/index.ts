import { colors, fontFamily } from '../lib/tokens';

const preset = {
  fontFamily,
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};

export default preset;
