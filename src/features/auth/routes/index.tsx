import React from 'react';
import { Routes, Route } from 'react-router-dom';

import BaseLayout from '@/features/auth/components/BaseLayout';

import Signin from './Signin';
import Signup from './Signup';
import Password from './Password';

function AuthRoutes() {
  return (
    <Routes>
      <Route path="*" element={<BaseLayout />}>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="password" element={<Password />} />
      </Route>
    </Routes>
  );
}

export default AuthRoutes;
