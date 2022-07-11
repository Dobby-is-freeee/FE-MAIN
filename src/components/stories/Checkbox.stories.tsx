/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { CheckBox } from '../Checkbox';

type MyArgTypes = Partial<Record<keyof ComponentProps<typeof CheckBox>, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'components/CheckBox',
  component: CheckBox,
  argTypes,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = ({ ...props }) => {
  return <CheckBox {...props}></CheckBox>;
};

export const Default = Template.bind({});
Default.args = {
  id: '1',
  label: '체크박스',
};

export const Checked = Template.bind({});
Checked.args = {
  id: '1',
  label: '체크박스',
  checked: true,
};

export const Small = Template.bind({});
Small.args = {
  id: '1',
  label: '체크박스',
  small: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: '1',
  label: '체크박스',
  disabled: true,
};
