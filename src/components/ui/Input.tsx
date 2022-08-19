import { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';

interface WrapStyleProps {
  maxLength?: number;
}

const Wrap = styled.div`
  position: relative;
`;

const InputStyled = styled.input<WrapStyleProps>`
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
  padding-right: ${({ maxLength }) => maxLength && '80px'};

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

const Suffix = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  letter-spacing: -0.0025em;
  color: ${({ theme }) => theme.colors.black};

  span {
    color: ${({ theme }) => theme.colors.gray3};
  }
`;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// TODO: 에러메세지 적용 with react-hook-form - cskim
export const Input = ({
  onChange,
  maxLength = 0,
  type = 'text',
  autoComplete = 'off',
  spellCheck = false,
  ...rest
}: InputProps) => {
  const [count, setCount] = useState(0);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (maxLength) {
      setCount(e.target.value.length);
    }

    onChange?.(e);
  };

  return (
    <Wrap>
      <InputStyled
        type={type}
        onChange={handleChange}
        maxLength={maxLength || undefined}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        {...rest}
      />
      {maxLength ? (
        <Suffix>
          {count}
          <span>/{maxLength}</span>
        </Suffix>
      ) : null}
    </Wrap>
  );
};
