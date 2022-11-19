import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';

import { theme, GlobalStyle } from '../src/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </ThemeProvider>
  ),
];
