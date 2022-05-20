import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Temp } from '@/components';
import { store } from '@/stores';
import { GlobalStyle } from '@/GlobalStyle';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Temp />
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};
