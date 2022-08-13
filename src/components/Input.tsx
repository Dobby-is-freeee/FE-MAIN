import styled from 'styled-components';

const InputBox = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 54px;
  border-radius: 4px;
  padding: 16px 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.03em;
  transition: border-color 300ms linear;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray2};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray2};
    border-color: ${({ theme }) => theme.colors.gray1};
    background-color: ${({ theme }) => theme.colors.gray1};
  }
`;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// TODO: 에러메세지 적용 with react-hook-form - cskim
export const Input = ({ type = 'text', autoComplete = 'off', spellCheck = false, ...rest }: InputProps) => {
  return <InputBox type={type} autoComplete={autoComplete} spellCheck={spellCheck} {...rest}></InputBox>;
};
