/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { ToolsRecommend } from '../ToolsRecommend';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof ToolsRecommend>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'collaboration/ToolsRecommend',
  component: ToolsRecommend,
  argTypes,
} as ComponentMeta<typeof ToolsRecommend>;

const Template: ComponentStory<typeof ToolsRecommend> = ({ ...props }) => {
  return <ToolsRecommend {...props}></ToolsRecommend>;
};

export const Default = Template.bind({});
Default.args = {};

export const IsFinished = Template.bind({});
IsFinished.args = {
  isFinished: true,
};
