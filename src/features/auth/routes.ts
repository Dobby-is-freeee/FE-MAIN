import { ModuleRouteModel } from 'jordy';

import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Password from './pages/Password';
import EmailAuth from './pages/EmailAuth';
import Complete from './pages/Complete';
import BaseLayout from './components/BaseLayout';

export const authRoutes: ModuleRouteModel[] = [
  {
    path: '/auth',
    wrap: BaseLayout,
    children: [
      {
        path: 'signin',
        element: Signin,
      },
      {
        path: 'signup',
        element: Signup,
      },
      {
        path: 'email',
        element: EmailAuth,
      },
      {
        path: 'password',
        element: Password,
      },
      {
        path: 'complete',
        element: Complete,
      },
    ],
  },
];
