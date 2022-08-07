import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import SigninContainer from '@/features/auth/containers/SigninContainer';

function Signin() {
  const navigate = useNavigate();

  const handleGoToSignup = useCallback(() => {
    navigate('/auth/signup');
  }, [navigate]);

  const handleGoToFindPassword = useCallback(() => {
    navigate('/auth/password');
  }, [navigate]);

  const handleGoToGoogleSignin = useCallback(() => {
    console.log('google');
  }, []);

  return (
    <SigninContainer
      onClickSignup={handleGoToSignup}
      onClickFindPassword={handleGoToFindPassword}
      onClickGoogleSignin={handleGoToGoogleSignin}
    />
  );
}

export default Signin;
