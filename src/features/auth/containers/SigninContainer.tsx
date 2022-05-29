import React, { useCallback } from 'react';
import styled from 'styled-components';

import { requestSignin } from '@/features/auth/api/members';

import SigninForm, { SigninFormPropTypes } from '@/features/auth/components/SigninForm';
import Button from '@/features/auth/components/Button';

function SigninContainer() {
  const handleSignin = useCallback<SigninFormPropTypes['onSubmit']>(async ({ email, password }) => {
    try {
      await requestSignin({ email: email, password: password });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Article>
      <Title>로그인</Title>
      <SigninForm onSubmit={handleSignin} />
      <Division />
      <GoggleButton>Google 계정으로 로그인</GoggleButton>
      <SignupText>
        사이드킥이 처음이라면 <span>회원가입</span>
      </SignupText>
    </Article>
  );
}

export default SigninContainer;

const Article = styled.article`
  width: 30rem;
`;

const Title = styled.h3`
  margin-bottom: 4rem;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
`;

const Division = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  border-top: 1px solid black;

  &::after {
    position: absolute;
    content: '또는';
    background-color: #f8f8f8;
    padding: 0 0.875rem;
    font-size: 1.25rem;
  }
`;

const GoggleButton = styled(Button)`
  margin-bottom: 10rem;
`;

const SignupText = styled.div`
  text-align: center;
  font-size: 1.25rem;

  & > span {
    font-weight: bold;
    cursor: pointer;
    margin-left: 0.2rem;
  }
`;
