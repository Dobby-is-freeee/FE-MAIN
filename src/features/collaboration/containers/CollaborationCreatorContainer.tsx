import { ProjectRoomCreator } from '../components/collaboration/ProjectRoomCreator';

interface ProjectRoomCreatorProps {
  isCreatorVisible: boolean;
  onCreatorVisibleToggle: () => void;
}

export const CollaborationCreatorContainer = ({
  isCreatorVisible,
  onCreatorVisibleToggle,
}: ProjectRoomCreatorProps) => {
  return <ProjectRoomCreator onCreatorVisibleToggle={onCreatorVisibleToggle} isCreatorVisible={isCreatorVisible} />;
};
