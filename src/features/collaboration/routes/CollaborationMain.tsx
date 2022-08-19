import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';

import { PageContainer } from '@/components';
import { CollaborationMainContainers } from '../containers/CollaborationMainContainers';

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

export const CollaborationMain = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <CustomTabList>
        <CustomTab selected={tabIndex === 0}>협업툴</CustomTab>
        <CustomTab selected={tabIndex === 1}>계정</CustomTab>
      </CustomTabList>

      <TabPanel>
        <PageContainer>
          <CollaborationMainContainers />
        </PageContainer>
      </TabPanel>
      <TabPanel>
        <PageContainer>계정</PageContainer>;
      </TabPanel>
    </Tabs>
  );
};
