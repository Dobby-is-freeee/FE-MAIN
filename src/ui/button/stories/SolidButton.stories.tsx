/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { SolidButton } from '../SolidButton';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof SolidButton>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'ui/button/SolidButton',
  component: SolidButton,
  argTypes,
} as ComponentMeta<typeof SolidButton>;

const Template: ComponentStory<typeof SolidButton> = ({ ...props }) => {
  return <SolidButton {...props}></SolidButton>;
};

export const Default = Template.bind({});
Default.args = {
  children: '로그인',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: '로그인',
};
