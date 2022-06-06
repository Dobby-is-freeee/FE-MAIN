import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import SignupContainer from '@/features/auth/containers/SignupContainer';

function Signup() {
  const navigate = useNavigate();

  const goToEmailAuth = useCallback(() => {
    navigate('/auth/email');
  }, [navigate]);

  const goToSignin = useCallback(() => {
    navigate('/auth/signin');
  }, [navigate]);

  return <SignupContainer successSignup={goToEmailAuth} onClickSignin={goToSignin} />;
}

export default Signup;
