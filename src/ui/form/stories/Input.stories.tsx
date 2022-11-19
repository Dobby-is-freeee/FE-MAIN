/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { Input } from '../Input';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof Input>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'components/Input',
  component: Input,
  argTypes,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ ...props }) => {
  return <Input {...props}></Input>;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: '입력',
};

export const Count = Template.bind({});
Count.args = {
  maxLength: 10,
  placeholder: '입력',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: '입력',
  disabled: true,
};
