import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};

  * {
    box-sizing: border-box;
  }
`;

function BaseLayout() {
  return (
    <Section>
      <Outlet />
    </Section>
  );
}

export default BaseLayout;
