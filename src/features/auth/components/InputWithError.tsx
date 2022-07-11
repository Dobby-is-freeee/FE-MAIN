import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import Input from '@/features/auth/components/Input';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledInput = styled(Input)<{ isError: boolean }>`
  border: 1px solid ${({ isError }) => (isError ? '#ff0000' : 'black')};
`;

const ErrorText = styled.div`
  /* position: absolute; */
  margin-top: 0.3rem;
  color: #ff0000;
  font-size: 1.25rem;
  white-space: pre-line;
`;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

function InputWithError(props: InputProps) {
  const { className, errorMessage, ...rest } = props;

  return (
    <>
      <Wrapper className={className}>
        <StyledInput isError={!!errorMessage} {...rest} />
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </Wrapper>
    </>
  );
}

export default InputWithError;
