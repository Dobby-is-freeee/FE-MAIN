import styled, { css } from 'styled-components';
import {
  ChangeEventHandler,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface WrapStyleProps {
  maxLength?: number;
  isError: boolean;
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
    border-color: ${({ theme, isError }) =>
      isError ? theme.colors.error : theme.colors.primary};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray2};
    border-color: ${({ theme }) => theme.colors.gray1};
    background-color: ${({ theme }) => theme.colors.gray1};
  }

  ${({ isError }) =>
    isError &&
    css`
      border-color: ${({ theme }) => theme.colors.error};
    `}
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

const ErrorMessage = styled.div`
  font-size: 12px;
  line-height: 20px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.error};
`;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  suffix?: ReactNode;
}

export const Input = ({
  onChange,
  maxLength = 0,
  type = 'text',
  autoComplete = 'off',
  spellCheck = false,
  errorMessage = '',
  value: outValue,
  ...rest
}: InputProps) => {
  const isError = useMemo(() => !!errorMessage, [errorMessage]);

  const [value, setValue] = useState(outValue);
  const [count, setCount] = useState(0);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (maxLength) {
      setCount(e.target.value.length);
    }

    setValue(e.target.value);
    onChange?.(e);
  };

  useEffect(() => {
    setValue(outValue);
  }, [outValue]);

  return (
    <Wrap>
      <InputStyled
        type={type}
        isError={isError}
        onChange={handleChange}
        maxLength={maxLength || undefined}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        value={value}
        {...rest}
      />
      {maxLength ? (
        <Suffix>
          {count}
          <span>/{maxLength}</span>
        </Suffix>
      ) : null}

      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Wrap>
  );
};
