import { useToggle } from 'react-use';
import styled from 'styled-components';

import { EyeHidden, EyeOpen } from '@/assets/images';
import { Input, InputProps } from './Input';

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;

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
      <button onClick={handleToggle}>{toggle ? <EyeHidden /> : <EyeOpen />}</button>
    </Wrap>
  );
};
