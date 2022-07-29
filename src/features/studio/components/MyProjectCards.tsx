import styled from 'styled-components';

import { Title } from '@/components';
import { ProjectItem, ProjectStatus } from '../containers/ProjectCardContainer';
import { ProjectCard } from './common/ProjectCard';
import { LineButton } from '@/components/LineButton';

const TitleWrap = styled(Title)`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 20px;
`;

const ProjectCardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1052px;
  gap: 12px;
`;

const ProjectCreator = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  width: 100%;
  height: 252px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectCreatorInner = styled.div`
  width: 214px;
  height: 98px;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectCreateButton = styled(LineButton)``;

interface MyProjectCardsProps {
  myProjects: ProjectItem[];
}

export const MyProjectCards = ({ myProjects }: MyProjectCardsProps) => {
  return (
    <>
      <TitleWrap level={2}>김프로님의 프로젝트</TitleWrap>
      <ProjectCardWrap>
        {myProjects.map(({ id, createDate, projectName, status, totalMember }) => (
          <ProjectCard
            key={id}
            id={id}
            projectName={projectName}
            status={status as ProjectStatus}
            totalMember={totalMember}
            createDate={createDate}
          />
        ))}
        <ProjectCreator>
          <ProjectCreatorInner>
            <p>
              팀원들과 작업공간을
              <br />
              개설해보세요!
            </p>
            <ProjectCreateButton>새 프로젝트 만들기</ProjectCreateButton>
          </ProjectCreatorInner>
        </ProjectCreator>
      </ProjectCardWrap>
    </>
  );
};
