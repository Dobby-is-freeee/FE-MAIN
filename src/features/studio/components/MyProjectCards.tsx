import styled from 'styled-components';

import { Error } from '@/assets/images';
import { Modal, Title } from '@/components';
import { LineButton } from '@/components/LineButton';
import { useToggle } from 'react-use';
import { ProjectItem, ProjectStatus } from '../containers/ProjectCardContainer';
import { ProjectCard } from './common';

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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ErrorIcon = styled(Error)`
  margin-bottom: 15px;
  width: 32px;
  height: 32px;
`;

const ErrorTitle = styled(Title)`
  margin-bottom: 8px;
`;

const ErrorDescription = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 24px;
`;

const ErrorExtra = styled.small`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray2};
  margin-bottom: 24px;
`;

const ModalButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 295px;
`;

interface MyProjectCardsProps {
  myProjects: ProjectItem[];
}

export const MyProjectCards = ({ myProjects }: MyProjectCardsProps) => {
  const [visible, handleToggle] = useToggle(false);

  const handleModalCancel = () => {
    handleToggle(false);
  };

  const handleModalConfirm = () => {
    handleToggle(false);
  };

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
            <ProjectCreateButton onClick={handleToggle}>새 프로젝트 만들기</ProjectCreateButton>
          </ProjectCreatorInner>
        </ProjectCreator>
      </ProjectCardWrap>

      <Modal
        visible={visible}
        content={
          <ModalContent>
            <ErrorIcon />
            <ErrorTitle level={3}>프로필 미작성</ErrorTitle>
            <ErrorDescription>내 프로필을 작성해야 프로젝트 참여가 가능합니다.</ErrorDescription>

            <ErrorExtra>초대받은 프로젝트: 없음</ErrorExtra>

            <ModalButtonWrap>
              <LineButton onClick={handleModalCancel}>다음에 할래요.</LineButton>
              <LineButton kind="primary" onClick={handleModalConfirm}>
                네, 지금 작성할게요.
              </LineButton>
            </ModalButtonWrap>
          </ModalContent>
        }
      />
    </>
  );
};
