import { InUseTools } from '../components/collaboration/InUseTools';
import { ProjectRoomCards } from '../components/collaboration/ProjectRoomCards';
import { ToolsRecommend } from '../components/collaboration/ToolsRecommend';

import TOOL_LIST from '../_fixtures/tool_list.json';
import ROOM_LIST from '../_fixtures/room_list.json';

interface CollaborationMainContainersProps {
  isCreatorVisible: boolean;
  onCreatorVisibleToggle: () => void;
}

export const CollaborationMainContainers = ({ onCreatorVisibleToggle }: CollaborationMainContainersProps) => {
  return (
    <>
      <ToolsRecommend isFinished={false} />
      <InUseTools toolList={TOOL_LIST} />
      <ProjectRoomCards projectRoomList={ROOM_LIST} onCreatorToggle={onCreatorVisibleToggle} />
    </>
  );
};
