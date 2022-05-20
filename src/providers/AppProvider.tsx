import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Temp } from '@/components';
import { store } from '@/stores';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={store}>
      {/* TODO: 예시를 위한 버튼 */}
      <Temp />
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};
