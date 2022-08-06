import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Pretendard', sans-serif;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  height: 56px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.0025em;
  transition: background-color 300ms linear;

  &:hover {
    background-color: #3b2c97;
  }

  &:active {
    background-color: #2c245a;
  }

  &:disabled {
    pointer-events: none;
    background-color: ${({ theme }) => theme.colors.gray2};
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const SolidButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};
