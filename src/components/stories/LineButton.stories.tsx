/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { LineButton } from '../LineButton';

type MyArgTypes = Partial<Record<keyof ComponentProps<typeof LineButton>, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'components/LineButton',
  component: LineButton,
  argTypes,
} as ComponentMeta<typeof LineButton>;

const Template: ComponentStory<typeof LineButton> = ({ ...props }) => {
  return <LineButton {...props}></LineButton>;
};

export const Default = Template.bind({});
Default.args = {
  children: '바로가기',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: '바로가기',
};
