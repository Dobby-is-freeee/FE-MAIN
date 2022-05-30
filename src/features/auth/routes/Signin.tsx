import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import SigninContainer from '@/features/auth/containers/SigninContainer';

function Signin() {
  const navigate = useNavigate();

  const goToSignup = useCallback(() => {
    navigate('/auth/signup');
  }, [navigate]);

  const goToFindPassword = useCallback(() => {
    navigate('/auth/password');
  }, [navigate]);

  const goToGoogleSignin = useCallback(() => {
    console.log('google');
  }, []);

  return (
    <SigninContainer
      onClickGoogleSignin={goToGoogleSignin}
      onClickSignup={goToSignup}
      onClickFindPassword={goToFindPassword}
    />
  );
}

export default Signin;
