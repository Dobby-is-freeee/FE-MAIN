import { generateDayValue } from '@/components';
import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker';
import { useState } from 'react';
import { CreateForm } from '../components/create/CreateForm';

export type PickerType = 'start' | 'end';

export interface PickerChangeHandlerArgs {
  type: PickerType;
  dayValue: DayValue;
}

export const StudioCreateFormContainer = () => {
  const [startDate, setStartDate] = useState<DayValue>(generateDayValue(new Date()));
  const [endDate, setEndDate] = useState<DayValue>(null);

  const handlePickerChange = ({ type, dayValue }: PickerChangeHandlerArgs) => {
    if (type === 'start') {
      return setStartDate(dayValue);
    }

    return setEndDate(dayValue);
  };

  return <CreateForm startDate={startDate} endDate={endDate} onPickerChange={handlePickerChange} />;
};
