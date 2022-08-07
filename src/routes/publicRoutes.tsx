import Auth from '@/features/auth';
import { Navigate, Outlet } from 'react-router-dom';

// todo check
export const publicRoutes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <Navigate to="/auth/signin" />,
      },
      {
        path: '/auth/*',
        element: <Auth />,
      },
    ],
  },
];
