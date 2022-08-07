/* eslint-disable no-alert */
import { ArgTypes, ComponentMeta, ComponentStory } from '@storybook/react';
import { ComponentProps } from 'react';
import { useToggle } from 'react-use';

import { ConfirmMessage } from '../ConfirmMessage';
import { LineButton } from '../LineButton';

type MyArgTypes = Partial<Record<keyof ComponentProps<typeof ConfirmMessage>, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'ChangePlease/ConfirmMessage',
  component: ConfirmMessage,
  argTypes,
} as ComponentMeta<typeof ConfirmMessage>;

const Template: ComponentStory<typeof ConfirmMessage> = ({ ...props }) => {
  const [isVisible, handleToggle] = useToggle(true);

  return (
    <>
      {!isVisible && <LineButton onClick={handleToggle}>message 오픈</LineButton>}
      <ConfirmMessage {...props} isVisible={isVisible} onClose={handleToggle} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  status: 'error',
  isVisible: true,
  children: '에러입니다.',
};

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  isVisible: true,
  children: (
    <>
      메시지 입니다.
      <br />
      다음 처럼 줄을 바꿔보세요.
    </>
  ),
};
