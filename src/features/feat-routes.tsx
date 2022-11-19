import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ModuleRouteModel, useRouteSystem } from 'jordy';
import { loginUser } from '@shared/stores/auth';
import { LayoutContainer } from '@shared/containers';
import { useAppDispatch, useAppSelector } from '@common/store';

import { studioRoutes } from './studio/routes';
import { collaborationRoutes } from './collaboration/routes';
import { authRoutes } from './auth/routes';

export const protectedRoutes: ModuleRouteModel[] = [
  {
    path: '/',
    wrap: LayoutContainer,
    element: () => <Navigate to="/studio" />,
  },
  ...studioRoutes,
  ...collaborationRoutes,
];

export const publicRoutes: ModuleRouteModel[] = [
  {
    path: '/',
    element: () => <Navigate to="/auth/signin" />,
  },
  ...authRoutes,
];

// user는 임시로 설정했습니다.
export const AppRoutes = () => {
  const { isLogged } = useAppSelector((state) => state.shared.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loginUser());
  }, [dispatch]);

  const routes = isLogged ? protectedRoutes : publicRoutes;

  const element = useRouteSystem(routes);

  return element;
};
