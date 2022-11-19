/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { InputPassword } from '../InputPassword';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof InputPassword>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'ui/form/InputPassword',
  component: InputPassword,
  argTypes,
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = ({ ...props }) => {
  return <InputPassword {...props}></InputPassword>;
};

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  errorMessage: '에러입니다.',
};
