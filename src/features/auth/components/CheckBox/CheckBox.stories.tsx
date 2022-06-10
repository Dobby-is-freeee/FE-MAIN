import { ComponentStoryObj } from '@storybook/react';
import React, { useState } from 'react';

import CheckBox, { CheckBoxPropTypes } from './CheckBox';

export default {
  component: CheckBox,
  title: 'CheckBox',
};

type Story = ComponentStoryObj<typeof CheckBox>;

const CheckBoxWithState = ({ ...props }: CheckBoxPropTypes) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(!e.target.checked);
    setChecked(!e.target.checked);
  };

  return (
    <CheckBox {...props} checked={checked} onChange={handleChange}>
      {props.children}
    </CheckBox>
  );
};

const Standard: Story = {
  render: (args) => {
    return <CheckBoxWithState {...args}>텍스트</CheckBoxWithState>;
  },
  args: {},
};

export const DefaultStory: Story = {
  ...Standard,
  args: {
    checked: false,
  },
};

export const CheckedStory: Story = {
  ...Standard,
  args: {
    checked: true,
  },
};
