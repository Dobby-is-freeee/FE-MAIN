import React from 'react';
import styled from 'styled-components';

import Input from '@/features/auth/components/Input';
import PasswordInput from '@/features/auth/components/PasswordInput';
import CheckBox from '@/features/auth/components/CheckBox';
import Button from '@/features/auth/components/Button';

export interface SignupFormPropTypes {}

function SignupForm() {
  return (
    <Wrapper>
      <Input placeholder="이름" />
      <Input placeholder="이메일" />
      <StyledPasswordInput placeholder="비밀번호" />
      <StyledCheckBox>
        사이드킥 이용 약관 및 개인정보 취급방침에 대한 내용을 모두 확인하였으며, 이에 동의합니다.
      </StyledCheckBox>
      <SignupButton status="confirm">가입하기</SignupButton>
    </Wrapper>
  );
}

export default SignupForm;

const Wrapper = styled.div`
  & > input:nth-of-type(1) {
    margin-bottom: 2rem;
  }

  & > input:nth-of-type(2) {
    margin-bottom: 2rem;
  }

  & > input:nth-of-type(4) {
    margin-bottom: 2rem;
  }
`;

const StyledPasswordInput = styled(PasswordInput)`
  margin-bottom: 1.5rem;
`;

const StyledCheckBox = styled(CheckBox)`
  margin-bottom: 2rem;
`;

const SignupButton = styled(Button)`
  margin-bottom: 2rem;
`;
