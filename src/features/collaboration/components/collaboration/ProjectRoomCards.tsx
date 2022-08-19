import styled from 'styled-components';

import { LineButton, Title } from '@/components';
import { Member, Time } from '@/assets/images';
import { IMAGE_DIC } from '../../constants';
import { EmptyCard } from '@/components/common/EmptyCard';

const RoomCardTitle = styled(Title)`
  margin-bottom: 20px;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  min-width: 1152px;
`;

const RoomCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: calc(25% - 8px);
  width: 254px;
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 6px;
  height: 268px;
`;

const RoomInformationWrap = styled.div``;

const InformationText = styled.div`
  display: flex;
  gap: 4px;
`;

const ToolImageBlock = styled.div`
  position: relative;
  background-color: rgba(228, 226, 226, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 6px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const GreenLight = styled.div`
  position: absolute;
  background-color: #1dcc64;
  border-radius: 50%;
  top: -2px;
  right: -2px;
  width: 6px;
  height: 6px;
`;

const RoomTitle = styled(Title)`
  margin-bottom: 8px;
`;

const RoomInformation = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray3};
  gap: 4px;
  margin-bottom: 8px;
  font-size: 12px;
`;

const RoomDescription = styled.p`
  max-height: 44px;
  line-height: 22px;
  margin-bottom: 16px;
  white-space: pre;
  letter-spacing: -0.0025em;
`;

const RoomCreateCard = styled.div`
  flex: 1;
  min-width: 254px;
  min-height: 268px;
`;

// FIXME: 임시 인터페이스
interface ProjectRoomList {
  id: number;
  tool: string;
  category: string;
  time: string;
  member: string;
  description: string;
}

interface ProjectRoomCardsProps {
  projectRoomList: ProjectRoomList[];
  onCreatorToggle: () => void;
}

export const ProjectRoomCards = ({ projectRoomList, onCreatorToggle }: ProjectRoomCardsProps) => {
  return (
    <>
      <RoomCardTitle level={2}>프로젝트 룸</RoomCardTitle>
      <Wrap>
        {projectRoomList.map((room) => (
          <RoomCardWrap key={room.id}>
            <RoomInformationWrap>
              <ToolImageBlock>
                <img src={IMAGE_DIC[room.tool]} alt="tool logo" />

                {/* TODO: 초록불의 경우 시작시간 + 10분까지만 켜져있다.  */}
                {room.id === 1 && <GreenLight />}
              </ToolImageBlock>

              <RoomTitle level={3}>{room.category}</RoomTitle>
              <RoomInformation>
                <InformationText>
                  <Time />
                  {room.time}
                </InformationText>
                <InformationText>
                  <Member />
                  {room.member}
                </InformationText>
              </RoomInformation>
              <RoomDescription>{room.description}</RoomDescription>
            </RoomInformationWrap>

            <LineButton variant="link" to="#">
              바로가기
            </LineButton>
          </RoomCardWrap>
        ))}

        <RoomCreateCard>
          <EmptyCard onClick={onCreatorToggle} buttonText="프로젝트 룸 만들기">
            멤버들과의 작업 공간을
            <br />
            개설해 보세요!
          </EmptyCard>
        </RoomCreateCard>
      </Wrap>
    </>
  );
};
