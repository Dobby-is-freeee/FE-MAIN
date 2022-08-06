import styled from 'styled-components';

import { Title } from '@/components';
import { ProjectItem, ProjectStatus } from '../../containers/ProjectCardContainer';
import { ProjectCard } from '../common';

const TitleWrap = styled(Title)`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 20px;
`;

const ProjectCardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 60px;
`;

interface InviteProjectCardsProps {
  inviteProjects: ProjectItem[];
}

export const InviteProjectCards = ({ inviteProjects }: InviteProjectCardsProps) => {
  return (
    <>
      <TitleWrap level={2}>초대받은 프로젝트</TitleWrap>

      <ProjectCardWrap>
        {inviteProjects.map(({ id, createDate, projectName, status, totalMember }) => (
          <ProjectCard
            key={id}
            id={id}
            projectName={projectName}
            status={status as ProjectStatus}
            totalMember={totalMember}
            createDate={createDate}
          />
        ))}
      </ProjectCardWrap>
    </>
  );
};
