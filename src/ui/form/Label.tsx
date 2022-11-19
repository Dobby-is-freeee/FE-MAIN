import styled from 'styled-components';
import { Star } from '@assets/images';

import { numberToPx } from '../utils';

interface FormItemProps {
  required?: boolean;
  labelWidth?: string | number;
  name?: string;
}

interface LabelStyledProps {
  labelWidth?: string | number;
}

const LabelStyled = styled.label<LabelStyledProps>`
  display: flex;
  white-space: nowrap;
  max-width: 110px;
  width: ${({ labelWidth }) => numberToPx(labelWidth)};
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  margin-right: 68px;
`;

const RequiredIcon = styled.span`
  content: url(${Star});
  width: 12px;
  height: 12px;
  margin-left: 2px;
  margin-top: 3px;
`;

export const Label = ({ name, labelWidth, required }: FormItemProps) => {
  return (
    <LabelStyled htmlFor={name} labelWidth={labelWidth}>
      {name}
      {required && <RequiredIcon />}
    </LabelStyled>
  );
};
