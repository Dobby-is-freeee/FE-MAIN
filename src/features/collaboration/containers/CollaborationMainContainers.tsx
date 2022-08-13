import { InUseTools } from '../components/collaboration/InUseTools';
import { ProjectRoomCards } from '../components/collaboration/ProjectRoomCards';
import { ProjectRoomCreator } from '../components/collaboration/ProjectRoomCreator';
import { ToolsRecommend } from '../components/collaboration/ToolsRecommend';

export const CollaborationMainContainers = () => {
  return (
    <>
      <ToolsRecommend isFinished={false} />
      <InUseTools />
      <ProjectRoomCards />
      <ProjectRoomCreator />
    </>
  );
};
