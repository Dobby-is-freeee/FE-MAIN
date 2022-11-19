import styled from 'styled-components';
import { SideNavigation } from '@common/components';
import { Header } from '@common/components';

const Wrap = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const LayoutMainContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 234px;
`;

const MainContent = styled.section`
  flex: 1;
`;

interface LayoutsProps {
  children?: React.ReactNode;
}

export const LayoutContainer = ({ children }: LayoutsProps) => {
  return (
    <Wrap>
      <SideNavigation />

      <LayoutMainContentWrap>
        <Header />
        <MainContent>{children}</MainContent>
      </LayoutMainContentWrap>
    </Wrap>
  );
};
