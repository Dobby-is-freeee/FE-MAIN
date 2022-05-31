import React from 'react';
import styled from 'styled-components';

import useBoolean from '@/features/auth/hooks/useBoolean';

import Input from '@/features/auth/components/Input';

export interface PasswordInputPropTypes {
  className?: string;
}

function PasswordInput({ className, ...others }: React.InputHTMLAttributes<HTMLInputElement> & PasswordInputPropTypes) {
  const [isShow, toggleShow] = useBoolean({ defaultValue: false });

  return (
    <Wrapper className={className}>
      <Input type={isShow ? 'text' : 'password'} {...others} />
      <div onClick={toggleShow}>눈</div>
    </Wrapper>
  );
}

export default PasswordInput;

const Wrapper = styled.div`
  display: flex;
  background: white;
  padding: 1rem 0rem 1rem 1.5rem;
  border: 1px solid black;
  border-radius: 0.4rem;
  align-items: center;

  & > input {
    width: calc(100% - 3rem);
    padding: initial;
    border: none;
  }

  & > div {
    width: 3rem;
    text-align: center;
    cursor: pointer;
  }
`;
