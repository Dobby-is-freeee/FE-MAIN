import { Routes, Route } from 'react-router-dom';



import Signup from './Signup';
import Signin from './Signin';
import Password from './Password';
import EmailAuth from './EmailAuth';
import Complete from './Complete';

import BaseLayout from '@/features/auth/components/BaseLayout';
import { serviceWorker } from '@/features/auth/__mock__/browser';

if (process.env.NODE_ENV === 'development') {
  serviceWorker.start({ onUnhandledRequest: 'bypass' });
}

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<BaseLayout />}>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="email" element={<EmailAuth />} />
        <Route path="password" element={<Password />} />
        <Route path="complete" element={<Complete />} />
      </Route>
    </Routes>
  );
}

export default AuthRoutes;
