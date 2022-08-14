/* eslint-disable no-alert */
import { ComponentProps, useState } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { ProjectRoomCreator } from '../ProjectRoomCreator';
import { LineButton } from '@/components';

type MyArgTypes = Partial<Record<keyof ComponentProps<typeof ProjectRoomCreator>, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'collaboration/ProjectRoomCreator',
  component: ProjectRoomCreator,
  argTypes,
} as ComponentMeta<typeof ProjectRoomCreator>;

const Template: ComponentStory<typeof ProjectRoomCreator> = ({ ...props }) => {
  const [visible, setVisible] = useState(false);
  const [roomDate, setRoomDate] = useState({
    year: 2022,
    month: 8,
    day: 21,
    hour: 0,
    minute: 0,
  });

  const handleToggle = () => setVisible((prev) => !prev);
  const handleDateChange = (value: any) => setRoomDate((prev) => ({ ...prev, ...value }));

  return (
    <>
      <LineButton onClick={handleToggle} variant="primary" style={{ width: '150px' }}>
        오픈 하기
      </LineButton>
      <ProjectRoomCreator
        {...props}
        isCreatorVisible={visible}
        onCreatorVisibleToggle={handleToggle}
        onDateChange={handleDateChange}
        roomDate={roomDate}></ProjectRoomCreator>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
