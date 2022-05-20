import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
