import { useCallback } from 'react';
import styled from 'styled-components';

import { requestSignin } from '@/features/auth/api/members';

import SigninForm, { SigninFormProps } from '@/features/auth/components/SigninForm';
import Button from '@/features/auth/components/Button';

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

export interface SigninContainerProps {
  onClickSignup: () => void;
  onClickGoogleSignin: () => void;
  onClickFindPassword: () => void;
}

function SigninContainer({ onClickSignup, onClickGoogleSignin, onClickFindPassword }: SigninContainerProps) {
  const handleSignin = useCallback<SigninFormProps['onSubmit']>(async ({ email, password }) => {
    try {
      await requestSignin({ email: email, password: password });
      // todo check error
    } catch (e: any) {
      if (!e.success) {
        if (e.code === 201) {
          return {
            type: 'email',
            message: '가입된 이메일이 아닙니다.\n 아직 가입을 안하셨다면 회원가입 후 로그인해주세요.',
          };
        }

        if (e.code === 202) {
          return {
            type: 'password',
            message: '비밀번호가 틀렸습니다.\n 비밀번호를 잊으셨다면 비밀번호 찾기를 진행해주세요.',
          };
        }

        if (e.code === 400) {
          return { type: 'password', message: '입력값 확인이 필요함' };
        }
      }

      throw e;
    }
  }, []);

  return (
    <Article>
      <Title>로그인</Title>
      <SigninForm onSubmit={handleSignin} onClick={onClickFindPassword} />
      <Division />
      <GoggleButton onClick={onClickGoogleSignin}>Google 계정으로 로그인</GoggleButton>
      <SignupText>
        사이드킥이 처음이라면 <span onClick={onClickSignup}>회원가입</span>
      </SignupText>
    </Article>
  );
}

export default SigninContainer;
