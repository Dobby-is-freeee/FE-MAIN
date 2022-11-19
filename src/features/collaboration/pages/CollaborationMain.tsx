import styled from 'styled-components';
import { useToggle } from 'react-use';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useLayoutEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { useNavigate, useQueryParams } from 'jordy';
import { Container } from '@ui';

import { CollaborationTabModel } from '../models/collaboration.model';
import { CollaborationMainContainers } from '../containers/CollaborationMainContainers';
import { CollaborationCreatorContainer } from '../containers/CollaborationCreatorContainer';
import { PublicAccountContainer } from '../containers/account/PublicAccountContainer';
import { MyAccountContainer } from '../containers/account/MyAccountContainer';
import { AccountByMemberContainer } from '../containers/account/AccountByMemberContainer';

interface CustomTabStyleProps {
  selected: boolean;
}

const CustomTabList = styled(TabList)`
  display: flex;
  gap: 28px;
  padding: 0 32px;
`;

const CustomTab = styled(Tab)<CustomTabStyleProps>`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.gray3};
  cursor: pointer;
  outline: none;
  transition: color 0.3s ease;
`;

function refineCollaborationQuery(
  queries: Record<string, string>,
): CollaborationTabModel {
  const { tab } = queries;
  return {
    tab: Number(tab || 0),
  };
}

export const CollaborationMain = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isCreatorVisible, handleCreatorVisibleToggle] = useToggle(false);

  const queries = useQueryParams(refineCollaborationQuery);
  const navigate = useNavigate();

  const handleSelectTab = (index: number) => {
    setTabIndex(index);
    navigate({ tab: index });
  };

  useLayoutEffect(() => {
    setTabIndex(queries.tab);
  }, [queries]);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={handleSelectTab}>
      <CustomTabList>
        <CustomTab selected={tabIndex === 0}>협업툴</CustomTab>
        <CustomTab selected={tabIndex === 1}>계정</CustomTab>
      </CustomTabList>

      <TabPanel>
        <Container>
          <CollaborationMainContainers
            isCreatorVisible={isCreatorVisible}
            onCreatorVisibleToggle={handleCreatorVisibleToggle}
          />
          <CollaborationCreatorContainer
            isCreatorVisible={isCreatorVisible}
            onCreatorVisibleToggle={handleCreatorVisibleToggle}
          />
        </Container>
      </TabPanel>
      <TabPanel>
        <Container>
          <MyAccountContainer />
          <PublicAccountContainer />
          <AccountByMemberContainer />
        </Container>
      </TabPanel>
    </Tabs>
  );
};
