import { Login } from '@/features/login';

export const publicRoutes = [
  {
    path: '/*',
    element: <Login />,
  },
];
