import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import SignupContainer from '@/features/auth/containers/SignupContainer';

function Signup() {
  const navigate = useNavigate();

  const goToSignin = useCallback(() => {
    navigate('/auth/signin');
  }, [navigate]);

  return <SignupContainer onClickSignin={goToSignin} />;
}

export default Signup;
