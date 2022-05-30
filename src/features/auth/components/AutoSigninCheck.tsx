import React from 'react';
import styled from 'styled-components';

function AutoSigninCheck({ ...others }: React.InputHTMLAttributes<HTMLInputElement>) {
  const { checked = false, className } = others;

  return (
    <StyledLabel checked={checked} className={className}>
      <HiddenCheck checked={checked} {...others} />
      자동 로그인
    </StyledLabel>
  );
}

export default AutoSigninCheck;

const StyledLabel = styled.label<{ checked: boolean }>`
  display: inline-block;
  position: relative;
  margin-left: 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;

  &::before {
    content: '\\2713';
    position: absolute;
    left: -1.5rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${({ checked }) => (checked ? 'black' : '#c4c4c4')};
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
    text-align: center;
    line-height: 1.25rem;
  }
`;

const HiddenCheck = styled.input.attrs<{ type: string }>({
  type: 'checkbox',
})`
  display: none;
`;
