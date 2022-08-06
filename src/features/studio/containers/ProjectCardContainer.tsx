import styled from 'styled-components';

import MOCK_PROJECT_ITEMS from '../_fixtures/projectItems.json';
import { MyProjectCards } from '../components/MyProjectCards';
import { InviteProjectCards } from '../components/InviteProjectCards';

const Wrap = styled.div`
  width: 100%;
  padding: 24px;
`;

export type ProjectStatus = 'wait' | 'invited' | 'create' | 'ended';
export interface ProjectItem {
  id: number;
  projectName: string;
  status: ProjectStatus;
  totalMember: number;
  createDate: string;
}

export const ProjectCardContainer = () => {
  const projects = (MOCK_PROJECT_ITEMS as ProjectItem[]).reduceRight((acc, cur) => {
    if (cur.status === 'wait') {
      acc.unshift(cur);
      return acc;
    }
    acc.push(cur);
    return acc;
  }, [] as ProjectItem[]);

  return (
    <Wrap>
      <InviteProjectCards inviteProjects={projects} />
      <MyProjectCards myProjects={projects} />
    </Wrap>
  );
};
