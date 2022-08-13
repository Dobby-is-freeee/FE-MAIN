import { DayValue, Day } from '@hassanmojab/react-modern-calendar-datepicker';
import styled from 'styled-components';

import { DatePicker, Input } from '@/components';
import { PickerChangeHandlerArgs, PickerType } from '../../containers/StudioCreateFormContainer';
import { Field, Label, RequiredIcon } from './CreateForm';

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

interface ProjectInformationProps {
  startDate: DayValue;
  endDate: DayValue;
  onPickerChange: (args: PickerChangeHandlerArgs) => void;
}

export const ProjectInformation = ({ endDate, startDate, onPickerChange }: ProjectInformationProps) => {
  const handlePickerChangeCurried = (type: PickerType) => (dayValue: DayValue) => {
    onPickerChange({ type, dayValue });
  };
  return (
    <>
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
    </>
  );
};
