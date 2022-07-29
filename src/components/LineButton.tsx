import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Pretendard', 'SUIT', sans-serif;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  width: 100%;
  height: 38px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.0025em;
  transition: background-color 300ms linear;

  &:hover {
    background-color: rgba(205, 204, 208, 0.25);
  }

  &:active {
    background-color: rgba(205, 204, 208, 0.55);
  }

  &:disabled {
    pointer-events: none;
    color: ${({ theme }) => theme.colors.gray2};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const LineButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};
