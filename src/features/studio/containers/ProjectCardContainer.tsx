import styled from 'styled-components';

import { MyProjectCards } from '../components/main/MyProjectCards';
import { InviteProjectCards } from '../components/main/InviteProjectCards';
import MOCK_PROJECT_ITEMS from '../_fixtures/projectItems.json';

const Wrap = styled.div`
  min-width: 1152px;
  width: 100%;
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
  const projects = (MOCK_PROJECT_ITEMS as ProjectItem[]).reduceRight(
    (acc, cur) => {
      if (cur.status === 'wait') {
        acc.unshift(cur);
        return acc;
      }
      acc.push(cur);
      return acc;
    },
    [] as ProjectItem[],
  );

  return (
    <Wrap>
      <InviteProjectCards inviteProjects={projects} />
      <MyProjectCards myProjects={projects} />
    </Wrap>
  );
};
