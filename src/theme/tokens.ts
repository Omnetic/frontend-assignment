// Design tokens matching the prototype (`prototype/index.html`) (colors, typography).
// Framework-free: wire them into whatever styling solution you choose.

export const colors = {
  text: {
    primary: '#001141',
    secondary: '#4D5667',
    tertiary: '#7A869A',
    white: '#FFFFFF',
    danger: '#B71C1C',
  },
  fill: {
    brand: '#0F62FE',
    brandHover: '#0043CE',
    darkBlue: '#001141',
    gray: '#F1F2F6',
    grayHover: '#E6E8EF',
    grayLightest: '#F1F2F6',
    white: '#FFFFFF',
  },
  border: {
    brand: '#0F62FE',
    gray: '#CAD1DE',
    danger: '#E32C1E',
  },
} as const;

export const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export const fontSizes = {
  heading: {1: '28px', 2: '24px', 3: '20px'},
  text: {base: '16px', small: '14px'},
} as const;

export const fontWeights = {
  heading: {1: 700, 2: 600, 3: 500},
  text: {base: 400, alternative: 500},
} as const;

export const radii = {
  button: '100px',
} as const;
