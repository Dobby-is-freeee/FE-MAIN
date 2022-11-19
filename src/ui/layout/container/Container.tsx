import styled from 'styled-components';

import { ContainerSizeType, ContainerStyledProps } from './container.type';

const CONTAINER_WIDTH_SIZE: Record<ContainerSizeType, string> = {
  lg: '1052px',
  md: '838px',
  sm: '600px',
};

interface PageContainerProps {
  size?: ContainerSizeType;
  children: React.ReactNode;
}

const ContainerStyled = styled.section<ContainerStyledProps>`
  width: ${({ size }) => CONTAINER_WIDTH_SIZE[size]};
  margin: 0 auto;
`;

export const Container = ({ size = 'md', children }: PageContainerProps) => {
  return <ContainerStyled size={size}>{children}</ContainerStyled>;
};
