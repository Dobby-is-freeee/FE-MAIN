import { Navigate, Outlet } from 'react-router-dom';

import { StudioRoutes } from '@/features/studio/routes';
import { CollaborationRoutes } from '@/features/collaboration/routes';
import { Layouts } from '@/components';

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
        element: <Navigate to="/studio" />,
      },
      {
        path: '/studio/*',
        element: <StudioRoutes />,
      },
      {
        path: '/collaboration/*',
        element: <CollaborationRoutes />,
      },
      {
        path: '*',
        element: <div>empty</div>,
      },
    ],
  },
];
