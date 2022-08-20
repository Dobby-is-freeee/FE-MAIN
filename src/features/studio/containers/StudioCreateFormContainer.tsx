import styled from 'styled-components';
import { useToggle } from 'react-use';
import { useState } from 'react';
import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker';

import { CreateForm, RequiredIcon } from '../components/create/CreateForm';

import { generateDayValue, Title } from '@/components';

const TitleWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const RequiredInformation = styled.span`
  color: ${({ theme }) => theme.colors.point};
`;

export type PickerType = 'start' | 'end';
export type IconGeneratorType = 'icon' | 'color';

export interface PickerChangeHandlerArgs {
  type: PickerType;
  dayValue: DayValue;
}

export const StudioCreateFormContainer = () => {
  const [startDate, setStartDate] = useState<DayValue>(
    generateDayValue(new Date()),
  );
  const [endDate, setEndDate] = useState<DayValue>(null);

  const [iconGeneratorType, setIconGeneratorType] =
    useState<IconGeneratorType | null>(null);

  const [isInviteModalVisible, handleInviteModalVisibleToggle] =
    useToggle(false);

  const handlePickerChange = ({ type, dayValue }: PickerChangeHandlerArgs) => {
    if (type === 'start') {
      return setStartDate(dayValue);
    }

    return setEndDate(dayValue);
  };

  const handleGeneratorTypeClick = (type: IconGeneratorType | null) => {
    setIconGeneratorType(type);
  };

  return (
    <>
      <TitleWrap>
        <Title level={2}>새 프로젝트</Title>
        <RequiredInformation>
          <RequiredIcon />
          필수 입력 항목
        </RequiredInformation>
      </TitleWrap>
      <CreateForm
        startDate={startDate}
        endDate={endDate}
        onPickerChange={handlePickerChange}
        iconGeneratorType={iconGeneratorType}
        onGeneratorTypeClick={handleGeneratorTypeClick}
        isInviteModalVisible={isInviteModalVisible}
        onInviteModalVisibleToggle={handleInviteModalVisibleToggle}
      />
    </>
  );
};
