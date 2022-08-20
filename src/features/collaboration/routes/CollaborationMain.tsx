import { useLayoutEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useToggle } from 'react-use';
import styled from 'styled-components';

import { PageContainer } from '@/components';
import { useQueryNavigate } from '@/hooks/useQueryNavigate';
import { useQueryParams } from '@/hooks/useQueryParams';
import { AccountByMemberContainer } from '../containers/account/AccountByMemberContainer';
import { MyAccountContainer } from '../containers/account/MyAccountContainer';
import { PublicAccountContainer } from '../containers/account/PublicAccountContainer';
import { CollaborationCreatorContainer } from '../containers/CollaborationCreatorContainer';
import { CollaborationMainContainers } from '../containers/CollaborationMainContainers';
import { CollaborationTabModel } from '../models/collaboration.model';

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
  color: ${({ selected, theme }) => (selected ? theme.colors.primary : theme.colors.gray3)};
  cursor: pointer;
  outline: none;
  transition: color 0.3s ease;
`;

function refineCollaborationQuery(queries: Record<string, string>): CollaborationTabModel {
  const { tab } = queries;
  return {
    tab: Number(tab || 0),
  };
}

export const CollaborationMain = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isCreatorVisible, handleCreatorVisibleToggle] = useToggle(false);

  const queries = useQueryParams(refineCollaborationQuery);
  const navigate = useQueryNavigate();

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
        <PageContainer>
          <CollaborationMainContainers
            isCreatorVisible={isCreatorVisible}
            onCreatorVisibleToggle={handleCreatorVisibleToggle}
          />
          <CollaborationCreatorContainer
            isCreatorVisible={isCreatorVisible}
            onCreatorVisibleToggle={handleCreatorVisibleToggle}
          />
        </PageContainer>
      </TabPanel>
      <TabPanel>
        <PageContainer>
          <MyAccountContainer />
          <PublicAccountContainer />
          <AccountByMemberContainer />
        </PageContainer>
      </TabPanel>
    </Tabs>
  );
};
