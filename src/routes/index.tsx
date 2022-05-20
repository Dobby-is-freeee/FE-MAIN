import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';

// user는 임시로 설정했습니다.
export const AppRoutes = () => {
  const isUser = false;

  const routes = isUser ? protectedRoutes : publicRoutes;

  const element = useRoutes(routes);

  return element;
};
