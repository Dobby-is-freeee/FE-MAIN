import { ComponentProps } from 'react';
import { ArgTypes, ComponentMeta, ComponentStory } from '@storybook/react';

import { Title } from '../../material/Title';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof Title>, ArgTypes[string]>
>;

const argTypes: MyArgTypes = {};

export default {
  component: Title,
  title: 'ui/material/Title',
  argTypes,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Head1 = Template.bind({});
Head1.args = {
  level: 1,
  children: '헤딩 1',
};

export const Head2 = Template.bind({});
Head2.args = {
  level: 2,
  children: '헤딩 2',
};

export const Head3 = Template.bind({});
Head3.args = {
  level: 3,
  children: '헤딩 3',
};

export const Head4 = Template.bind({});
Head4.args = {
  level: 4,
  children: '헤딩 4',
};
