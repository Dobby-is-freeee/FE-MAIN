/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { IconGenerator } from '../IconGenerator';
import { action } from '@storybook/addon-actions';

type MyArgTypes = Partial<Record<keyof ComponentProps<typeof IconGenerator>, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'studio/create/IconGenerator',
  component: IconGenerator,
  argTypes,
} as ComponentMeta<typeof IconGenerator>;

const Template: ComponentStory<typeof IconGenerator> = ({ ...props }) => {
  const onClick = action('click');

  return <IconGenerator {...props} onGeneratorTypeClick={onClick}></IconGenerator>;
};

export const Default = Template.bind({});
Default.args = {};

export const ColorOpen = Template.bind({});
ColorOpen.args = {
  iconGeneratorType: 'color',
};

export const IconOpen = Template.bind({});
IconOpen.args = {
  iconGeneratorType: 'icon',
};
