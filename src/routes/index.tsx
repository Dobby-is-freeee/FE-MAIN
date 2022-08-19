import { useRoutes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from '@/stores';
import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';
import { loginUser } from '@/stores/auth';

// user는 임시로 설정했습니다.
export const AppRoutes = () => {
  const { isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUser());
  }, [dispatch]);

  const routes = isLogged ? protectedRoutes : publicRoutes;

  const element = useRoutes(routes);

  return element;
};
