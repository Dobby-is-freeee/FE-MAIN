import styled from 'styled-components';

import { Title } from '@/components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 60px;
`;

const ToolsCardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

const ToolCard = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 6px;
  padding: 20px;
`;

const ToolImageBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.gray1};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  margin-right: 16px;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

const ToolInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToolTitle = styled(Title)`
  margin-bottom: 2px;
`;

const ToolSubText = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.gray3};
`;

interface ToolList {
  id: number;
  image: string;
  title: string;
  sub: string;
}

interface InUseToolsProps {
  toolList: ToolList[];
}

export const InUseTools = ({ toolList }: InUseToolsProps) => {
  if (!toolList?.length) {
    return <div>Empty :)</div>;
  }

  return (
    <Wrap>
      <Title level={2}>사용중인 협업툴</Title>

      <ToolsCardWrap>
        {toolList.map((tool) => (
          <ToolCard key={tool.id}>
            <ToolImageBlock>
              <img src={tool.image} alt="tool logo" />
            </ToolImageBlock>
            <ToolInformation>
              <ToolTitle level={3}>{tool.title}</ToolTitle>
              <ToolSubText>{tool.sub}</ToolSubText>
            </ToolInformation>
          </ToolCard>
        ))}
      </ToolsCardWrap>
    </Wrap>
  );
};
