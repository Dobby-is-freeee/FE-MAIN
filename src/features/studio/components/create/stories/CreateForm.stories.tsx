/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CreateForm } from '../CreateForm';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof CreateForm>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'studio/create/CreateForm',
  component: CreateForm,
  argTypes,
} as ComponentMeta<typeof CreateForm>;

const Template: ComponentStory<typeof CreateForm> = ({ ...props }) => {
  const handlePickerChange = action('picker');
  const handleGeneratorTypeClick = action('generatorType');
  const handleToggle = action('toggle');

  return (
    <CreateForm
      {...props}
      onPickerChange={handlePickerChange}
      onGeneratorTypeClick={handleGeneratorTypeClick}
      onInviteModalVisibleToggle={handleToggle}
    ></CreateForm>
  );
};

export const Default = Template.bind({});
Default.args = {
  startDate: { year: 2022, month: 8, day: 7 },
  endDate: { year: 2022, month: 12, day: 7 },
};
