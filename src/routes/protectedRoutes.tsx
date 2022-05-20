import { Studio } from '@/features/studio';

export const protectedRoutes = [
  {
    path: '/',
    element: <Studio />,
  },
  {
    path: '*',
    element: <div>empty</div>,
  },
];
