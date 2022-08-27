import { Navigate, Outlet } from 'react-router-dom';

import Auth from '@/features/auth';

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
