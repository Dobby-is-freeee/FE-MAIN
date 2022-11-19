import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ToolsMask, IconGo } from '@assets/images';

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1052px;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${ToolsMask});
  background-repeat: no-repeat;
  background-position: center right;
  background-blend-mode: soft-light;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 60px;
`;

const LinkBlock = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

interface ToolsRecommendProps {
  isFinished: boolean;
}

/* TODO: 링크 */
const DEFAULT_MESSAGES = {
  text: '협업툴 추천을 받아 보세요!',
  link: '시작하기',
  to: '/#',
};
const ALREADY_MESSAGES = {
  text: '추천 받은 협업툴을 활용해 보세요.',
  link: '바로가기',
  to: '#',
};

export const ToolsRecommend = ({ isFinished = false }: ToolsRecommendProps) => {
  const message = isFinished ? ALREADY_MESSAGES : DEFAULT_MESSAGES;

  return (
    <Block>
      <span>{message.text}</span>
      <LinkBlock to={message.to}>
        {message.link} <IconGo />
      </LinkBlock>
    </Block>
  );
};
