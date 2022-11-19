import styled from 'styled-components';

interface TagStyledProps {
  color?: 'primary' | 'point';
}

const TagStyled = styled.div<TagStyledProps>`
  padding: 6px 12px;
  width: fit-content;
  height: 30px;
  background: ${({ color }) => {
    return color === 'primary'
      ? 'rgba(78, 53, 231, 0.1)'
      : 'rgba(250, 173, 24, 0.1)';
  }};
  border-radius: 36px;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme, color }) => color && theme.colors[color]};
`;

interface TagProps extends TagStyledProps {
  children?: React.ReactNode;
}

export const Tag = ({ children, color = 'primary' }: TagProps) => {
  return <TagStyled color={color}>{children}</TagStyled>;
};
