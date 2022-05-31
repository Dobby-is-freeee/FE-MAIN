import React from 'react';
import { ComponentStoryObj } from '@storybook/react';

import InputWithError from './InputWithError';

export default {
  component: InputWithError,
  title: 'InputWithError',
};

type Story = ComponentStoryObj<typeof InputWithError>;

const Standard: Story = {
  render: (args) => <InputWithError {...args} />,
  args: {},
};

export const DefaultStory: Story = {
  ...Standard,
};

export const ErrorStory: Story = {
  ...Standard,
  args: {
    errorMessage: '에러 발생',
  },
};
