import styled, { css } from 'styled-components';
import { ChangeEventHandler } from 'react';
import { CheckBoxSelected } from '@assets/images';

const Wrap = styled.div`
  display: flex;
`;

const CheckInput = styled.input<{ disabled: boolean; small?: boolean }>`
  display: none;

  & + label {
    position: relative;
    display: block;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
    padding-left: 24px;
    width: 100%;
    line-height: ${({ small }) => (small ? '21px' : '26px')};
    font-size: ${({ small }) => (small ? '14px' : '16px')};
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  & + label::before {
    position: absolute;
    top: ${({ small }) => (small ? '3px' : '6px')};
    left: 0px;
    width: 14px;
    height: 14px;
    border-radius: 3px;
    border: solid 1px ${({ theme }) => theme.colors.gray3};
    content: '';

    ${({ disabled }) =>
      disabled &&
      css`
        background-color: ${({ theme }) => theme.colors.gray1};
      `};
  }

  &:checked + label::after {
    position: absolute;
    display: block;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    top: ${({ small }) => (small ? '3px' : '6px')};
    left: 0px;
    width: 16px;
    height: 16px;
    line-height: 20px;
    border-radius: 3px;
    content: url(${CheckBoxSelected});
  }
`;

export interface CheckedValue {
  id: string | number;
  checked: boolean;
}

interface CheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'id'> {
  id: string | number;
  onChange?: (checkedValue: CheckedValue) => void;
  label?: string | React.ReactNode;
  small?: boolean;
}

export const CheckBox = ({
  id,
  label,
  small,
  disabled = false,
  onChange,
  ...props
}: CheckBoxProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.({ id: e.target.id, checked: e.target.checked });
  };

  return (
    <Wrap>
      <CheckInput
        {...props}
        id={String(id)}
        onChange={handleChange}
        type="checkbox"
        disabled={disabled}
        small={small}
      />
      <label htmlFor={String(id)}>{label}</label>
    </Wrap>
  );
};
