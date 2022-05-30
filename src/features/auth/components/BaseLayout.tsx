import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function BaseLayout() {
  return (
    <Section>
      <Logo>logo</Logo>
      <Outlet />
    </Section>
  );
}

export default BaseLayout;

const Logo = styled.div`
  position: absolute;
  top: 5rem;
  left: 5rem;
  padding: 2.5rem;
  border: 1px solid black;
  border-radius: 1rem;
`;

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
  background-color: #f8f8f8;

  * {
    box-sizing: border-box;
  }
`;
