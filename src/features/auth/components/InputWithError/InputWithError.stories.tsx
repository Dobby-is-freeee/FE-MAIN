import { ComponentStoryObj } from '@storybook/react';
import styled from 'styled-components';

import InputWithError from './InputWithError';

export default {
  component: InputWithError,
  title: 'InputWithError',
  argTypes: { onChange: { action: 'changed' } },
};

type Story = ComponentStoryObj<typeof InputWithError>;

const Standard: Story = {
  render: (args) => <InputWithError {...args} />,
  args: {},
  decorators: [(story) => <Wrapper>{story()}</Wrapper>],
};

export const DefaultStory: Story = {
  ...Standard,
};

export const ErrorStory: Story = {
  ...Standard,
  args: {
    ...Standard.args,
    errorMessage: '에러 발생',
  },
};

const Wrapper = styled.div`
  & > div {
    width: 20rem;
    margin: 0 auto;
  }
`;
