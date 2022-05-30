import React from 'react';
import styled from 'styled-components';

export interface InputPropTypes {
  className?: string;
  errorMessage?: string;
}

function InputWithError({ className, errorMessage, ...others }: React.InputHTMLAttributes<HTMLInputElement> & InputPropTypes) {
  return (
    <>
      <Wrapper className={className}>
        <StyledInput isError={!!errorMessage} {...others} />
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </Wrapper>
    </>
  );
}

export default InputWithError;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledInput = styled.input<{ isError: boolean }>`
  width: 100%;
  height: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid ${({ isError }) => (isError ? '#ff0000' : 'black')};
  border-radius: 0.3rem;
  font-size: 1.25rem;

  &::placeholder {
    color: gray;
  }

  &:focus {
    outline: none;
  }
`;

const ErrorText = styled.div`
  /* position: absolute; */
  margin-top: 0.3rem;
  color: #ff0000;
  font-size: 1.25rem;
  white-space: pre-line;
`;
