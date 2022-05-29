import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function BaseLayout() {
  return (
    <Section>
      <Outlet />
    </Section>
  );
}

export default BaseLayout;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #f8f8f8;

  * {
    box-sizing: border-box;
  }
`;
