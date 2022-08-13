import { useRoutes } from 'react-router-dom';

import { useSelector } from '@/stores';
import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';

// user는 임시로 설정했습니다.
export const AppRoutes = () => {
  const { isLogged } = useSelector((state) => state.auth);

  const routes = isLogged ? protectedRoutes : publicRoutes;

  const element = useRoutes(routes);

  return element;
};
