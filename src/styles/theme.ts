export const colors = {
  primary: '#4E35E7',
  secondary: '#d6bbfe',
  black: '#1d1d1d',
  white: '#ffffff',
  darkWhite: '#fafafa',
  gray1: '#e3e3e3',
  gray2: '#cdccd0',
  gray3: '#949494',
  point: '#faad18',
  error: '#eb5656',
} as const;

export const theme = {
  colors,
};

export type ThemeType = typeof theme;
