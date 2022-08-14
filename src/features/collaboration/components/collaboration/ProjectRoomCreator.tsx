import styled from 'styled-components';

import { CheckBox, DatePicker, Input, LineButton, Modal, Title } from '@/components';
import { IMAGE_DIC } from '../../constants';

const Wrap = styled.div``;

const FormField = styled.div`
  margin-bottom: 28px;
`;

const FormFieldTitle = styled(Title)`
  margin-bottom: 8px;
`;

const CheckBoxWithLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  gap: 8px;
`;

const CheckBoxBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 72px;
  height: 100px;
`;

const CheckBoxStyled = styled(CheckBox)`
  & + label {
    padding: 0;
    height: 40px;
  }

  & + label::before {
    background-color: #fff;
    z-index: 10;
    top: 4px;
    left: 4px;
  }

  &:checked + label::after {
    z-index: 10;
    top: 4px;
    left: 4px;
  }
`;

const LogoBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray1};
  width: 72px;
  height: 72px;
  border-radius: 4px;
  margin-bottom: 4px;

  img {
    width: 48px;
    height: 48px;
    top: 0;
    left: 0;
  }
`;

const TextArea = styled.textarea``;

const ModalFooter = styled.div``;
interface ProjectRoomCreatorProps {
  isCreatorVisible: boolean;
  onCreatorVisibleToggle: () => void;
}

const TOOLS_DIC = ['notion', 'figma', 'slack', 'zoom', 'xd', 'sketch', 'discord'];

export const ProjectRoomCreator = ({ isCreatorVisible, onCreatorVisibleToggle }: ProjectRoomCreatorProps) => {
  return (
    <Modal
      width={600}
      height={670}
      title="프로젝트 룸 생성"
      onClose={onCreatorVisibleToggle}
      visible={isCreatorVisible}
      content={
        <Wrap>
          <FormField>
            <FormFieldTitle level={4}>협업툴</FormFieldTitle>
            {/* TODO: 이미지가 활용된 체크박스 컴포넌트?화 */}
            <CheckBoxWithLogo>
              {TOOLS_DIC.map((value) => (
                <CheckBoxBlock key={value}>
                  <CheckBoxStyled
                    id={value}
                    label={
                      <LogoBox>
                        <img src={IMAGE_DIC[value]} alt="tool logo" />
                      </LogoBox>
                    }
                  />
                  <Title level={4}>{value.slice(0, 1).toUpperCase() + value.slice(1, value.length)}</Title>
                </CheckBoxBlock>
              ))}
            </CheckBoxWithLogo>
          </FormField>

          <FormField>
            {/* TODO: count */}
            <Title level={4}>프로젝트 룸 이름</Title>
            <Input />
          </FormField>

          <FormField>
            <Title level={4}>일정</Title>

            <div>
              <CheckBox small label="상시" id="always" />
              <CheckBox small label="매일" id="everyday" />
              <CheckBox small label="매주" id="weekly" />
              <CheckBox small label="격주" id="biweekly" />
              <CheckBox small label="매월" id="month" />
            </div>
            {/* TODO: hh:mm */}
            <DatePicker value={null} />
          </FormField>

          <FormField>
            <Title level={4}>참여 멤버</Title>
            <div>
              <CheckBox small label="모든 멤버" id="all" />
              <CheckBox small label="직접 선택" id="custom" />
            </div>

            {/* 직접 선택 시, 유저 보이기 */}
            <div></div>
          </FormField>

          <FormField>
            {/* TODO: suffix - https:// */}
            <Title level={4}>링크</Title>
            <Input />
          </FormField>

          <FormField>
            {/* TODO: count */}
            <Title level={4}>설명</Title>
            <TextArea placeholder="간단하게 룸 규칙이나 접속 정보 등을 기재해 주세요."></TextArea>
          </FormField>
        </Wrap>
      }
      footer={
        <ModalFooter>
          <LineButton onClick={onCreatorVisibleToggle}>취소</LineButton>
          <LineButton>프로젝트 생성</LineButton>
        </ModalFooter>
      }
    />
  );
};
