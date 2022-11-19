/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { LineButton } from '../LineButton';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof LineButton>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'ui/button/LineButton',
  component: LineButton,
  argTypes,
} as ComponentMeta<typeof LineButton>;

const Template: ComponentStory<typeof LineButton> = ({ ...props }) => {
  return <LineButton {...props}></LineButton>;
};

export const Default = Template.bind({});
Default.args = {
  children: '버튼',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  to: '#',
  children: '링크버튼',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: '버튼',
};
