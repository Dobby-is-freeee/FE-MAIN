import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { Modal } from '../Modal';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof Modal>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'components/Modal',
  component: Modal,
  argTypes,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ ...props }) => {
  return <Modal {...props}></Modal>;
};

export const Default = Template.bind({});
Default.args = {
  visible: true,
  content: 'hi',
  width: 450,
  height: 258,
};

export const Title = Template.bind({});
Title.args = {
  visible: true,
  title: '타이틀',
  width: 600,
  height: 619,
  footer: '푸터',
};
