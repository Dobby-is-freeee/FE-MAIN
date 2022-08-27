import { useRoutes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { publicRoutes } from './publicRoutes';
import { protectedRoutes } from './protectedRoutes';

import { loginUser } from '@/stores/auth';
import { useSelector } from '@/stores';

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
