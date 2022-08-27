/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { ProjectRoomCards } from '../ProjectRoomCards';
import ROOM_LIST from '../../../_fixtures/room_list.json';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof ProjectRoomCards>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'collaboration/ProjectRoomCards',
  component: ProjectRoomCards,
  argTypes,
} as ComponentMeta<typeof ProjectRoomCards>;

const Template: ComponentStory<typeof ProjectRoomCards> = ({ ...props }) => {
  return (
    <div style={{ maxWidth: '1152px' }}>
      <ProjectRoomCards {...props}></ProjectRoomCards>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  projectRoomList: [],
};

export const OneRoomList = Template.bind({});
OneRoomList.args = {
  projectRoomList: [ROOM_LIST[0]],
};

export const TwoRoomList = Template.bind({});
TwoRoomList.args = {
  projectRoomList: [ROOM_LIST[0], ROOM_LIST[1]],
};

export const ThreeRoomList = Template.bind({});
ThreeRoomList.args = {
  projectRoomList: [ROOM_LIST[0], ROOM_LIST[1], ROOM_LIST[2]],
};

export const FourRoomList = Template.bind({});
FourRoomList.args = {
  projectRoomList: ROOM_LIST,
};
