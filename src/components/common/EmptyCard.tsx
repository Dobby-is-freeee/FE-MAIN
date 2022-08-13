import styled from 'styled-components';
import { LineButton } from '../ui';

const ProjectCreator = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  flex: 1;
  height: 100%;
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
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectCreateButton = styled(LineButton)`
  width: fit-content;
  padding: 8px 24px;
`;

interface EmptyCardProps {
  onClick: () => void;
  buttonText: string | React.ReactNode;
  children: string | React.ReactNode;
}

export const EmptyCard = ({ onClick, buttonText, children }: EmptyCardProps) => (
  <ProjectCreator>
    <ProjectCreatorInner>
      {children}
      <ProjectCreateButton onClick={onClick}>{buttonText}</ProjectCreateButton>
    </ProjectCreatorInner>
  </ProjectCreator>
);
