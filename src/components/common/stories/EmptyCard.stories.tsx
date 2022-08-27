/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { EmptyCard } from '../EmptyCard';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof EmptyCard>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'components/common/EmptyCard',
  component: EmptyCard,
  argTypes,
} as ComponentMeta<typeof EmptyCard>;

const Template: ComponentStory<typeof EmptyCard> = ({ ...props }) => {
  return <EmptyCard {...props}></EmptyCard>;
};

export const Default = Template.bind({});
Default.args = {
  children: <p>생성해 주세요.</p>,
  buttonText: '생성하기',
};
