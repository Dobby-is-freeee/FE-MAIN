import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { isEmail } from '@/features/auth/libs/validator';
import useBoolean from '@/features/auth/hooks/useBoolean';
import useInput from '@/features/auth/hooks/useInput';
import { Input, LineButton, SolidButton } from '@/components';
import { CheckBox } from '@/components/CheckBox';

const StyledForm = styled.form`
  margin-bottom: 12px;
  width: 100%;
`;

const InputWrap = styled.div`
  margin-bottom: 16px;

  input + input {
    margin-top: 12px;
  }
`;

const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  & > button {
    font-size: 16px;
    letter-spacing: -0.03em;
    width: 100px;
    border: none;
  }
`;

export interface SigninFormProps {
  onSubmit: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void | { type: 'email' | 'password'; message: string }>;
  onClick: () => void;
}

function SigninForm(props: SigninFormProps) {
  const { onClick, onSubmit } = props;

  const [email, setEmail, isValidEmail] = useInput({
    validator: isEmail,
    preProcessor: (value) => {
      if (error !== undefined && error.type === 'email') setError(undefined);
      return value.trim();
    },
  });
  const [password, setPassword] = useInput({
    preProcessor: (value) => {
      if (error !== undefined && error.type === 'password') setError(undefined);
      return value.trim();
    },
  });

  const [autoSignin, toggleAutoSignin] = useBoolean({ defaultValue: false });
  const [error, setError] = useState<{ type: 'email' | 'password'; message: string } | undefined>();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (email === '') return setError({ type: 'email', message: '이메일 작성 필요' });
      if (password === '') return setError({ type: 'password', message: '비밀번호 작성 필요' });
      if (!isValidEmail) return setError({ type: 'email', message: '이메일 양식 맞지 않음' });
      if (error === undefined) {
        const result = await onSubmit({ email, password });
        if (result !== undefined) return setError({ type: result.type, message: result.message });
        localStorage.setItem('autoSignin', `${autoSignin}`);
      }
    },
    [email, password, isValidEmail, error, autoSignin, onSubmit],
  );

  return (
    <StyledForm onSubmit={handleSubmit}>
      {/* TODO: validation 체크 */}
      <InputWrap>
        <Input value={email} onChange={setEmail} placeholder="이메일" />
        <Input value={password} onChange={setPassword} type="password" />
      </InputWrap>

      <OptionsWrapper>
        <CheckBox label="자동로그인" id="login" onChange={toggleAutoSignin} checked={autoSignin} />
        <LineButton onClick={onClick}>비밀번호 찾기</LineButton>
      </OptionsWrapper>
      <SolidButton type="submit" disabled={error !== undefined}>
        로그인
      </SolidButton>
    </StyledForm>
  );
}

export default SigninForm;
