import styled from 'styled-components';
import { useToggle } from 'react-use';
import { useNavigate } from 'react-router-dom';
import { Modal, Title, LineButton } from '@ui';
import { EmptyCard } from '@common/components/EmptyCard';
import { Error } from '@assets/images';

import { ProjectCard } from '../common';
import {
  ProjectItem,
  ProjectStatus,
} from '../../containers/ProjectCardContainer';

const TitleWrap = styled(Title)`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 20px;
`;

const ProjectCardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1152px;
  gap: 12px;
`;

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

const ProjectEmptyCard = styled.div`
  min-width: 25%;
  height: 268px;
  flex: 1;
`;

interface MyProjectCardsProps {
  myProjects: ProjectItem[];
}

export const MyProjectCards = ({ myProjects }: MyProjectCardsProps) => {
  const [visible, handleToggle] = useToggle(false);
  const navigate = useNavigate();

  const handleModalCancel = () => {
    handleToggle(false);
  };

  const handleModalConfirm = () => {
    handleToggle(false);
    navigate('/studio/create');
  };

  return (
    <>
      <TitleWrap level={2}>김프로님의 프로젝트</TitleWrap>
      <ProjectCardWrap>
        {myProjects.map(
          ({ id, createDate, projectName, status, totalMember }) => (
            <ProjectCard
              key={id}
              id={id}
              projectName={projectName}
              status={status as ProjectStatus}
              totalMember={totalMember}
              createDate={createDate}
            />
          ),
        )}

        <ProjectEmptyCard>
          <EmptyCard onClick={handleToggle} buttonText="새 프로젝트 만들기">
            <p>
              팀원들과 작업공간을
              <br />
              개설해보세요!
            </p>
          </EmptyCard>
        </ProjectEmptyCard>
      </ProjectCardWrap>

      <Modal
        visible={visible}
        content={
          <ModalContent>
            <ErrorIcon />
            <ErrorTitle level={3}>프로필 미작성</ErrorTitle>
            <ErrorDescription>
              내 프로필을 작성해야 프로젝트 참여가 가능합니다.
            </ErrorDescription>

            <ErrorExtra>초대받은 프로젝트: 없음</ErrorExtra>

            <ModalButtonWrap>
              <LineButton onClick={handleModalCancel}>
                다음에 할래요.
              </LineButton>
              <LineButton variant="primary" onClick={handleModalConfirm}>
                네, 지금 작성할게요.
              </LineButton>
            </ModalButtonWrap>
          </ModalContent>
        }
      />
    </>
  );
};
