import { Outlet } from 'react-router-dom';

import { Layouts } from '@/components';
import { StudioRoutes } from '@/features/studio/routes';

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
        path: '/studio/*',
        element: <StudioRoutes />,
      },
      {
        path: '*',
        element: <div>empty</div>,
      },
    ],
  },
];
