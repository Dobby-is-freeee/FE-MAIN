/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { ProjectRoomCards } from '../ProjectRoomCards';

import ROOM_LIST from '../../../_fixtures/room_list.json';

type MyArgTypes = Partial<Record<keyof ComponentProps<typeof ProjectRoomCards>, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'collaboration/ProjectRoomCards',
  component: ProjectRoomCards,
  argTypes,
} as ComponentMeta<typeof ProjectRoomCards>;

const Template: ComponentStory<typeof ProjectRoomCards> = ({ ...props }) => {
  return <ProjectRoomCards {...props}></ProjectRoomCards>;
};

export const Default = Template.bind({});
Default.args = {
  projectRoomList: ROOM_LIST,
};
