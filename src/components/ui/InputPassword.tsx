import styled from 'styled-components';
import { useToggle } from 'react-use';

import { Input, InputProps } from './Input';

import { EyeHidden, EyeOpen } from '@/assets/images';

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding-right: 48px;
  }

  button {
    background-color: transparent;
    position: absolute;
    right: 12px;
  }
`;

export const InputPassword = (props: InputProps) => {
  const [toggle, handleToggle] = useToggle(false);

  return (
    <Wrap>
      <Input type={toggle ? 'text' : 'password'} {...props} />
      <button onClick={handleToggle}>
        {toggle ? <EyeHidden /> : <EyeOpen />}
      </button>
    </Wrap>
  );
};
