import React from 'react';
import styled, { css } from 'styled-components';

const Label = styled.label<{ checked: boolean | undefined }>`
  display: inline-flex;
  font-size: 1.25rem;
  user-select: none;
  line-height: 1.3rem;
  align-items: center;
  &::before {
    ${({ checked }) => css`
      content: '${checked ? '\\2713' : ' '}';
      background: ${checked ? 'black' : 'white'};
      flex-shrink: 0;
    `}
    display: block;
    text-align: center;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    margin-bottom: 0.1rem;
    font-size: 0.9rem;
    line-height: 1rem;
    color: white;
    border-radius: 4px;
    border: 1px solid black;
  }
`;

const HiddenCheckBox = styled.input.attrs<{ type: string }>({
  type: 'checkbox',
})`
  display: none;
`;

function CheckBox({
  children,
  ...others
}: React.InputHTMLAttributes<HTMLInputElement> & {
  children: React.ReactNode | string;
}) {
  const { checked, className } = others;

  return (
    <Label className={className} checked={true}>
      <HiddenCheckBox checked={checked} {...others} />
      {children}
    </Label>
  );
}

export default CheckBox;
