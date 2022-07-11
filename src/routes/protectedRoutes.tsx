import { Profile } from '@/features/profile';
import { Studio } from '@/features/studio';

export const protectedRoutes = [
  {
    path: '/',
    element: <Studio />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '*',
    element: <div>empty</div>,
  },
];
