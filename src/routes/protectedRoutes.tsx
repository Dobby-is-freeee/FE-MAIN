import { Studio } from '@/features/studio';
import { Layouts } from '@/features/studio/components';
import { Outlet } from 'react-router-dom';

export const protectedRoutes = [
  {
    path: '/',
    element: (
      <Layouts>
        <Outlet />
      </Layouts>
    ),
    children: [
      {
        path: '/',
        element: <Studio />,
      },
      {
        path: '*',
        element: <div>empty</div>,
      },
    ],
  },
];
