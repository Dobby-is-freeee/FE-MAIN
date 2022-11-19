import { ModuleRouteModel } from 'jordy';
import { Container } from '@ui';

import { StudioMain } from './pages/StudioMain';
import { StudioCreate } from './pages/StudioCreate';
import { Empty } from './components/common';

export const studioRoutes: ModuleRouteModel[] = [
  {
    path: '/studio',
    wrap: Container,
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
