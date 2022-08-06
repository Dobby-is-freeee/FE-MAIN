import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker';
import { useState } from 'react';
import { useToggle } from 'react-use';
import styled from 'styled-components';

import { generateDayValue, Title } from '@/components';
import { CreateForm } from '../components/create/CreateForm';

const TitleWrap = styled(Title)`
  margin-bottom: 20px;
  font-weight: 500;
`;
export type PickerType = 'start' | 'end';
export type IconGeneratorType = 'icon' | 'color';

export interface PickerChangeHandlerArgs {
  type: PickerType;
  dayValue: DayValue;
}

export const StudioCreateFormContainer = () => {
  const [startDate, setStartDate] = useState<DayValue>(generateDayValue(new Date()));
  const [endDate, setEndDate] = useState<DayValue>(null);

  const [iconGeneratorType, setIconGeneratorType] = useState<IconGeneratorType | null>(null);

  const [isInviteModalVisible, handleInviteModalVisibleToggle] = useToggle(false);

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
      <TitleWrap level={2}>새 프로젝트</TitleWrap>
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
