/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { Label } from '../Label';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof Label>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'ui/form/Label',
  component: Label,
  argTypes,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = ({ ...props }) => {
  return <Label {...props}></Label>;
};

export const Default = Template.bind({});
Default.args = {
  name: '라벨',
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};

export const labelWidth = Template.bind({});
labelWidth.args = {
  ...Default.args,
  required: true,
  labelWidth: 200,
};
