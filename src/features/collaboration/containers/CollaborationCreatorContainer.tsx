import { Day } from '@hassanmojab/react-modern-calendar-datepicker';
import { useState } from 'react';
import { ProjectRoomCreator } from '../components/collaboration/ProjectRoomCreator';

// FIXME: 서버에게 어떤 값을 줄지 몰라 임의로 설정한 타입임.
export interface RoomDateModel extends Day {
  hour: number;
  minute: number;
}

function createRooDateModel(): RoomDateModel {
  const today = new Date();

  return {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
    hour: 0,
    minute: 0,
  };
}

interface ProjectRoomCreatorProps {
  isCreatorVisible: boolean;
  onCreatorVisibleToggle: () => void;
}

export const CollaborationCreatorContainer = ({
  isCreatorVisible,
  onCreatorVisibleToggle,
}: ProjectRoomCreatorProps) => {
  const [roomDate, setRoomDate] = useState<RoomDateModel>(createRooDateModel());

  const handleDateChange = (state: Partial<RoomDateModel>) => {
    // TODO: 서버 로직
    setRoomDate((prev) => ({ ...prev, ...state }));
  };

  return (
    <ProjectRoomCreator
      roomDate={roomDate}
      onDateChange={handleDateChange}
      onCreatorVisibleToggle={onCreatorVisibleToggle}
      isCreatorVisible={isCreatorVisible}
    />
  );
};
