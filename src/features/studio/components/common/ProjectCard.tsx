import styled from 'styled-components';
import { LineButton } from '@ui';
import { Icon01, Member } from '@assets/images';

import {
  ProjectItem,
  ProjectStatus,
} from '../../containers/ProjectCardContainer';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 6px;
  max-width: calc(25% - 12px);
  min-width: 254px;
  flex: 1;
  height: 252px;
`;

const ProjectCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 4px;
`;

const ProjectIconWrap = styled.div`
  background-color: #677bf9;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProjectName = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.0025em;
`;

const ProjectCreateDate = styled.div`
  font-weight: 400;
  font-size: 12px;

  color: ${({ theme }) => theme.colors.gray3};
`;

const ProjectLinkWrap = styled.div`
  margin: 0 auto;
  width: 214px;
  margin-bottom: 20px;
`;

const ProjectLink = styled(LineButton)``;

const ProjectCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.darkWhite};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const ProjectMember = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray3};
  font-weight: 400;
  font-size: 12px;
  gap: 4px;
  font-size: 13px;
`;

const ProjectStatusText = styled.span`
  font-weight: 500;
  font-size: 12px;
`;

interface ProjectStatusValue {
  message: string;
  buttonText: string;
  disabled?: boolean;
}

const STATUS_DIC: Record<ProjectStatus, ProjectStatusValue> = {
  // TODO: 임시, 명세 나올 시 수정 필수 - chkim
  wait: { message: '00 님의 초대', buttonText: '수락하기' },
  invited: { message: '참여중', buttonText: '입장하기' },
  create: { message: '운영중', buttonText: '입장하기' },
  ended: { message: '종료', buttonText: '입장하기', disabled: true },
};

interface ProjectCardProps extends ProjectItem {}

export const ProjectCard = ({
  id,
  createDate,
  projectName,
  status,
  totalMember,
}: ProjectCardProps) => {
  return (
    <Wrap>
      <ProjectCardBody>
        <ProjectIconWrap>
          <Icon01 />
        </ProjectIconWrap>

        <ProjectInfo>
          <ProjectName>{projectName}</ProjectName>
          <ProjectCreateDate>{createDate}</ProjectCreateDate>
        </ProjectInfo>
      </ProjectCardBody>
      <ProjectLinkWrap>
        <ProjectLink variant="link" to="/collaboration">
          바로가기
        </ProjectLink>
      </ProjectLinkWrap>
      <ProjectCardFooter>
        <ProjectMember>
          <Member />
          현재 {totalMember}명이 참가중
        </ProjectMember>
        <ProjectStatusText>{STATUS_DIC[status].buttonText}</ProjectStatusText>
      </ProjectCardFooter>
    </Wrap>
  );
};
