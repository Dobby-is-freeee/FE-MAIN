import styled from 'styled-components';
import { useState } from 'react';
import {
  default as ReactTimePicker,
  TimePickerProps as ReactTimePickerProps,
} from 'rc-time-picker';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import './TimePicker.css';
import { RoomDateModel } from '@features/collaboration/containers/CollaborationCreatorContainer';

const TimePickerStyled = styled(ReactTimePicker)`
  display: flex;
  align-items: center;

  & .rc-time-picker-panel {
    height: 54px;
    border-radius: 4px;
    padding: 16px 15px;
    font-size: 16px;
  }

  & .rc-time-picker-clear {
    display: flex;
    align-items: center;
    height: 54px;
    margin-top: -5px;
    z-index: 20;

    & i::after {
      font-size: 24px;
      z-index: 20;
    }
  }

  & .rc-time-picker-panel-select,
  & .rc-time-picker-input,
  & .rc-time-picker-panel-input {
    height: 54px;
    border-radius: 4px;
    padding: 16px 15px;
    font-size: 16px;

    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  & .rc-time-picker-input {
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.gray2};
      border-color: ${({ theme }) => theme.colors.gray1};
      background-color: ${({ theme }) => theme.colors.gray1};
    }
  }
`;

interface TimePickerProps extends Omit<ReactTimePickerProps, 'onChange'> {
  onChange: (state: Partial<RoomDateModel>) => void;
}

export const TimePicker = ({ onChange, ...props }: TimePickerProps) => {
  const format = 'h:mm a';
  const now = moment();

  const [time, setTime] = useState<moment.Moment>(now.hour(0).minute(0));

  const handleChange = (newValue: moment.Moment) => {
    if (newValue === null) {
      setTime(now.hour(0).minute(0));
      return onChange({ hour: 0, minute: 0 });
    }

    const hour = newValue.hour();
    const minute = newValue.minutes();

    setTime(now.hour(hour).minute(minute));
    onChange({ hour, minute });
  };

  return (
    <TimePickerStyled
      {...props}
      showSecond={false}
      popupClassName="popup"
      value={time}
      defaultValue={now}
      onChange={handleChange}
      format={format}
      use12Hours
    />
  );
};
