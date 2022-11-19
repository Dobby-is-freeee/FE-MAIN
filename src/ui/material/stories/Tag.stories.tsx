/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { Tag } from '../Tag';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof Tag>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'ui/material/Tag',
  component: Tag,
  argTypes,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = ({ ...props }) => {
  return <Tag {...props}></Tag>;
};

export const Default = Template.bind({});
Default.args = {
  children: '협업툴',
};

export const Color = Template.bind({});
Color.args = {
  children: '사이트',
  color: 'point',
};
