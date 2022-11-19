import { ModuleRouteModel } from 'jordy';
import { PageContainer } from '@ui';

import { StudioMain } from './pages/StudioMain';
import { StudioCreate } from './pages/StudioCreate';
import { Empty } from './components/common';

export const studioRoutes: ModuleRouteModel[] = [
  {
    path: '/studio',
    wrap: PageContainer,
    element: StudioMain,
    children: [
      {
        path: 'create',
        element: StudioCreate,
      },
    ],
  },
  {
    path: '*',
    element: Empty,
  },
];
