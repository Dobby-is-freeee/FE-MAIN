/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { Container } from '../Container';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof Container>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'ui/layout/container/Container',
  component: Container,
  argTypes,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = ({ ...props }) => {
  return <Container {...props}></Container>;
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: <div>1052px</div>,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  children: <div>838px</div>,
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: <div>600px</div>,
};
