import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker';
import styled from 'styled-components';

import { CheckBox, DatePicker, Input, LineButton, Modal, Title } from '@/components';
import { TimePicker } from '@/components/ui/TimePicker';
import { IMAGE_DIC } from '../../constants';
import { RoomDateModel } from '../../containers/CollaborationCreatorContainer';
import { useState } from 'react';

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
    z-index: 15;
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

const CalenderCheckBoxs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 12px;

  & label {
    font-weight: 400;
  }
`;

const DateTimePickerWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
`;

const TextArea = styled.textarea``;

const ModalFooter = styled.div``;
interface ProjectRoomCreatorProps {
  roomDate: RoomDateModel;
  isCreatorVisible: boolean;
  onCreatorVisibleToggle: () => void;
  onDateChange: (state: Partial<RoomDateModel>) => void;
}

const TOOLS_DIC = ['notion', 'figma', 'slack', 'zoom', 'xd', 'sketch', 'discord'];
const CHECKBOX_LIST = ['always', 'everyday', 'weekly', 'biweekly', 'month'] as const;
const DATE_CHECKBOX_DIC = {
  always: '상시',
  everyday: '매일',
  weekly: '매주',
  biweekly: '격주',
  month: '매월',
};

type CheckBoxValueType = typeof CHECKBOX_LIST[number];

export const ProjectRoomCreator = ({
  roomDate,
  onDateChange,
  isCreatorVisible,
  onCreatorVisibleToggle,
}: ProjectRoomCreatorProps) => {
  const [checkedValue, setCheckedValue] = useState<CheckBoxValueType>('always');

  const currentDatePickerValue: DayValue = {
    year: roomDate.year,
    month: roomDate.month,
    day: roomDate.day,
  };

  const handleDateTimeChangeCurried = (value: CheckBoxValueType) => () => {
    setCheckedValue(value);
  };

  const handleDatePickerChange = (state: DayValue) => {
    onDateChange({
      year: state?.year,
      month: state?.month,
      day: state?.day,
    });
  };

  const handleTimePickerChange = (state: Partial<RoomDateModel>) => {
    onDateChange(state);
  };

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
            <FormFieldTitle level={4}>프로젝트 룸 이름</FormFieldTitle>
            <Input maxLength={20} placeholder="예) 정기 미팅, 같이 작업해요" />
          </FormField>

          <FormField>
            <FormFieldTitle level={4}>일정</FormFieldTitle>

            <CalenderCheckBoxs>
              {CHECKBOX_LIST.map((value) => (
                <CheckBox
                  key={value}
                  id={value}
                  small
                  checked={value === checkedValue}
                  label={DATE_CHECKBOX_DIC[value]}
                  onChange={handleDateTimeChangeCurried(value)}
                />
              ))}
            </CalenderCheckBoxs>
            <DateTimePickerWrap>
              <DatePicker
                disabled={checkedValue === 'always'}
                onChange={handleDatePickerChange}
                inputPlaceholder="시작일"
                value={currentDatePickerValue}
              />
              <TimePicker disabled={checkedValue === 'always'} onChange={handleTimePickerChange} />
            </DateTimePickerWrap>
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
