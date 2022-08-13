import styled from 'styled-components';

import { CheckBox, DatePicker, Input, LineButton, Modal, Title } from '@/components';
import { IMAGE_DIC } from '../../constants';

const Wrap = styled.div``;

const FormField = styled.div``;

const CheckBoxWithLogo = styled.div``;

const TextArea = styled.textarea``;

const ModalFooter = styled.div``;
interface ProjectRoomCreatorProps {
  isCreatorVisible: boolean;
  onCreatorVisibleToggle: () => void;
}

export const ProjectRoomCreator = ({ isCreatorVisible, onCreatorVisibleToggle }: ProjectRoomCreatorProps) => {
  return (
    <Modal
      height="670"
      title="프로젝트 룸 생성"
      onClose={onCreatorVisibleToggle}
      visible={isCreatorVisible}
      content={
        <Wrap>
          <FormField>
            <Title level={4}>협업툴</Title>
            {/* TODO: mapping */}
            <CheckBoxWithLogo>
              <div>
                <CheckBox id="notion" />
                <img src={IMAGE_DIC['notion']} alt="tool logo" />
              </div>
              <div>Notion</div>
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
