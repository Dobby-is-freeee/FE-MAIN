import React from 'react';
import styled from 'styled-components';

export interface ButtonPropTypes {
  status?: 'normal' | 'confirm';
  children: React.ReactNode;
}

function Button({
  children,
  status = 'normal',
  ...others
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonPropTypes) {
  const { className } = others;

  return (
    <StyledButton className={className} status={status} {...others}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button<{ status: NonNullable<ButtonPropTypes['status']> }>`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  border: 1px solid black;
  border-radius: 2rem;
  background-color: ${({ status }) => (status === 'normal' ? 'white' : 'black')};
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ status }) => (status === 'normal' ? 'black' : 'white')};
  text-align: center;
  cursor: pointer;

  &:disabled {
    background-color: #c4c4c4;
    color: white;
    border-color: #c4c4c4;
    cursor: not-allowed;
  }
`;
