/* eslint-disable no-alert */
import { ComponentProps, useState } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { CustomDatePicker as DatePicker } from '../DatePicker';
import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker';

type MyArgTypes = Partial<Record<keyof ComponentProps<typeof DatePicker>, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'components/DatePicker',
  component: DatePicker,
  argTypes,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = ({ ...props }) => {
  const [value, setValue] = useState<DayValue>();

  const handleChange = (value: DayValue) => {
    setValue(value);
  };

  return <DatePicker {...props} onChange={handleChange} value={value}></DatePicker>;
};

export const Default = Template.bind({});
Default.args = {
  inputPlaceholder: '시작일',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  inputPlaceholder: '시작일',
};
