import styled from 'styled-components';
import React from 'react';
import type { Day, DayValue } from '@hassanmojab/react-modern-calendar-datepicker';

import { Star } from '@/assets/images';
import { DatePicker, Input, Title } from '@/components';
import { LineButton } from '@/components/LineButton';
import { PickerChangeHandlerArgs, PickerType } from '../../containers/StudioCreateFormContainer';

const CreateFormWrap = styled.form``;

const FieldGroup = styled.div`
  padding: 1.5rem;
  border: 1.5px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 5px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1.5px solid #e3e3e3;
  padding: 1rem 0;

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.label`
  display: flex;
  white-space: nowrap;
  max-width: 110px;
  width: 100%;
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

const ProjectRangePickerWrap = styled.div`
  display: flex;
  align-items: center;
`;

const PickerDivided = styled.span`
  width: 16px;
  height: 2px;
  margin: 0 8px;
  background-color: ${({ theme }) => theme.colors.gray2};
`;

interface CreateFormProps {
  startDate: DayValue;
  endDate: DayValue;
  onPickerChange: (args: PickerChangeHandlerArgs) => void;
}

export const CreateForm = ({ endDate, startDate, onPickerChange }: CreateFormProps) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const handlePickerChangeCurried = (type: PickerType) => (dayValue: DayValue) => {
    onPickerChange({ type, dayValue });
  };

  return (
    <>
      <Title level={3}>새 프로젝트</Title>

      <CreateFormWrap onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <Label htmlFor="name">
              프로젝트명
              <RequiredIcon>*</RequiredIcon>
            </Label>
            <Input name="name" placeholder="한글/영어 16자 이내" />
          </Field>

          <Field>
            <Label htmlFor="range">
              프로젝트 기간
              <RequiredIcon>*</RequiredIcon>
            </Label>
            <ProjectRangePickerWrap>
              <DatePicker
                maximumDate={endDate as Day}
                inputPlaceholder="시작일"
                value={startDate}
                onChange={handlePickerChangeCurried('start')}
              />
              <PickerDivided></PickerDivided>
              <DatePicker
                minimumDate={startDate as Day}
                inputPlaceholder="종료일"
                value={endDate}
                onChange={handlePickerChangeCurried('end')}
              />
            </ProjectRangePickerWrap>
          </Field>

          <Field>
            <Label htmlFor="icon">
              아이콘
              <RequiredIcon>*</RequiredIcon>
            </Label>
            <Input />
          </Field>

          <Field>
            <Label htmlFor="name">팀구성</Label>
            <Input type="date" />
          </Field>

          <Field>
            <Label htmlFor="name">멤버</Label>
            <LineButton type="submit">이메일로 초대</LineButton>
          </Field>
        </FieldGroup>
      </CreateFormWrap>
    </>
  );
};
