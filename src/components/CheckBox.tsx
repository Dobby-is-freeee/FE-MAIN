import { CheckBoxSelected } from '@/assets/images';
import styled, { css } from 'styled-components';

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
    /* TODO: 체크박스 아이콘 */
    content: url(${CheckBoxSelected});
  }
`;

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  small?: boolean;
}

export const CheckBox = ({ id, label, small, disabled = false, ...props }: CheckBoxProps) => {
  return (
    <Wrap>
      <CheckInput id={id} type="checkbox" {...props} disabled={disabled} small={small} />
      <label htmlFor={id}>{label}</label>
    </Wrap>
  );
};
