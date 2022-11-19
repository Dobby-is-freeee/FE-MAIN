/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { TimePicker } from '../TimePicker';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof TimePicker>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'ui/form/TimePicker',
  component: TimePicker,
  argTypes,
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = ({ ...props }) => {
  return <TimePicker {...props}></TimePicker>;
};

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
