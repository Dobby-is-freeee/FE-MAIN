import { useCallback } from 'react';

import { Google } from '@/assets/images';
import SignupForm from '@/features/auth/components/SignupForm';
import { FormField, GoggleButton, Logo, SignupButton, SignupText, TitleWrap } from './SigninContainer';

export interface SignupContainerProps {
  successSignup: () => void;
  onClickSignin: () => void;
}

function SignupContainer({ successSignup, onClickSignin }: SignupContainerProps) {
  const handleSubmit = useCallback(() => {
    successSignup();
  }, [successSignup]);

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
        Apro.go가 처음이라면 <SignupButton onClick={onClickSignin}>로그인</SignupButton>
      </SignupText>
    </>
  );
}

export default SignupContainer;
