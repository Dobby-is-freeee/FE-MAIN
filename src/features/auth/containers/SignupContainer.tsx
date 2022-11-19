import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import SignupForm from '@features/auth/components/SignupForm';
import { Google } from '@assets/images';

import {
  FormField,
  GoggleButton,
  Logo,
  SignupButton,
  SignupText,
  TitleWrap,
} from './SigninContainer';

export interface SignupContainerProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SignupContainer(_: SignupContainerProps) {
  const navigate = useNavigate();

  const handleGoToSignin = useCallback(() => {
    navigate('/auth/signin');
  }, [navigate]);

  const handleSubmit = useCallback(() => {
    navigate('/auth/email');
  }, [navigate]);

  return (
    <>
      <FormField>
        <Logo />
        <TitleWrap level={1}>회원가입</TitleWrap>
        <SignupForm onSubmit={handleSubmit} />
        <GoggleButton>
          <Google />
          Google 계정으로 시작하기
        </GoggleButton>
      </FormField>
      <SignupText>
        이미 가입하셨나요?{' '}
        <SignupButton onClick={handleGoToSignin}>로그인</SignupButton>
      </SignupText>
    </>
  );
}

export default SignupContainer;
