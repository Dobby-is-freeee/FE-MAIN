import styled from 'styled-components';
import { useToggle } from 'react-use';
import { EyeHidden, EyeOpen } from '@assets/images';

import { Input, InputProps } from './Input';

const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background-color: ${({ theme }) => theme.colors.white};

  & > div {
    width: 100%;
  }
  input {
    border: none;
    padding-right: 36px;
  }

  button {
    background-color: transparent;
    padding-right: 12px;
  }
`;

export const InputPassword = (props: InputProps) => {
  const [toggle, handleToggle] = useToggle(false);

  return (
    <Wrap>
      <Input
        errorMessage={props.errorMessage}
        type={toggle ? 'text' : 'password'}
        {...props}
      />
      <button onClick={handleToggle}>
        {toggle ? <EyeHidden /> : <EyeOpen />}
      </button>
    </Wrap>
  );
};
