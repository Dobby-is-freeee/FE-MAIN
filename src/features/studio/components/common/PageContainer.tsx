import styled from 'styled-components';

const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 0;
`;

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return <Container>{children}</Container>;
};
