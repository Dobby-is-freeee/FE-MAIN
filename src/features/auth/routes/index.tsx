import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { serviceWorker } from '@/features/auth/__mock__/browser';

import BaseLayout from '@/features/auth/components/BaseLayout';

import Signin from './Signin';
import Signup from './Signup';
import Password from './Password';
import EmailAuth from './EmailAuth';

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
      </Route>
    </Routes>
  );
}

export default AuthRoutes;