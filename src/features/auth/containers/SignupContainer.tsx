import React, { useCallback } from 'react';
import styled from 'styled-components';

import SignupForm from '@/features/auth/components/SignupForm';
import Button from '@/features/auth/components/Button';

export interface SignupContainerPropTypes {
  successSignup: () => void;
  onClickSignin: () => void;
}

function SignupContainer({ successSignup, onClickSignin }: SignupContainerPropTypes) {
  const handleSubmit = useCallback(() => {
    successSignup();
  }, [successSignup]);

  return (
    <Article>
      <Title>회원가입</Title>
      <SignupForm onSubmit={handleSubmit} />
      <Division />
      <GoggleButton>Google 계정으로 시작하기</GoggleButton>
      <SigninText>
        사이드킥이 처음이라면 <span onClick={onClickSignin}>로그인</span>
      </SigninText>
    </Article>
  );
}

export default SignupContainer;

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

const SigninText = styled.div`
  text-align: center;
  font-size: 1.25rem;

  & > span {
    font-weight: bold;
    cursor: pointer;
    margin-left: 0.2rem;
  }
`;
