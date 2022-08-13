import { InUseTools } from '../components/collaboration/InUseTools';
import { ProjectRoomCards } from '../components/collaboration/ProjectRoomCards';
import { ProjectRoomCreator } from '../components/collaboration/ProjectRoomCreator';
import { ToolsRecommend } from '../components/collaboration/ToolsRecommend';

import TOOL_LIST from '../_fixtures/tool_list.json';
import ROOM_LIST from '../_fixtures/room_list.json';

export const CollaborationMainContainers = () => {
  return (
    <>
      <ToolsRecommend isFinished={false} />
      <InUseTools toolList={TOOL_LIST} />
      <ProjectRoomCards projectRoomList={ROOM_LIST} />
      <ProjectRoomCreator />
    </>
  );
};
