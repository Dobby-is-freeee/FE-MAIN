/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { InUseTools } from '../InUseTools';

type MyArgTypes = Partial<Record<keyof ComponentProps<typeof InUseTools>, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'collaboration/InUseTools',
  component: InUseTools,
  argTypes,
} as ComponentMeta<typeof InUseTools>;

const Template: ComponentStory<typeof InUseTools> = ({ ...props }) => {
  return <InUseTools {...props}></InUseTools>;
};

export const Default = Template.bind({});
Default.args = {};
