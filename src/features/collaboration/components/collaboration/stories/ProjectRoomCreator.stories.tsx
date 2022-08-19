/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { ProjectRoomCreator } from '../ProjectRoomCreator';

type MyArgTypes = Partial<Record<keyof ComponentProps<typeof ProjectRoomCreator>, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'collaboration/ProjectRoomCreator',
  component: ProjectRoomCreator,
  argTypes,
} as ComponentMeta<typeof ProjectRoomCreator>;

const Template: ComponentStory<typeof ProjectRoomCreator> = ({ ...props }) => {
  return <ProjectRoomCreator {...props}></ProjectRoomCreator>;
};

export const Default = Template.bind({});
Default.args = {};
