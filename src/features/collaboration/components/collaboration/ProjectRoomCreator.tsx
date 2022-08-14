import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker';
import styled from 'styled-components';

import { AddProfileSvg } from '@/assets/images';
import { CheckBox, DatePicker, Input, LineButton, Modal, Title } from '@/components';
import { TimePicker } from '@/components/ui/TimePicker';
import { ChangeEventHandler, useState } from 'react';
import { IMAGE_DIC, MEMBER_LIST } from '../../constants';
import { RoomDateModel } from '../../containers/CollaborationCreatorContainer';

const Wrap = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;

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

const MemberCheckBoxWrap = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 400;
  margin-bottom: 12px;

  & label {
    font-weight: 400;
  }
`;

const TextAreaWrap = styled.div`
  position: relative;
`;

const Suffix = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);

  span {
    color: ${({ theme }) => theme.colors.gray3};
  }
`;

const TextArea = styled.textarea`
  overflow: auto;
  resize: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  width: 100%;
  height: 102px;
  padding: 15px 20px;
  font-size: 16px;

  &::placeholder {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray2};
  }
`;

const ModalFooter = styled.div``;

const TOOLS_DIC = ['notion', 'figma', 'slack', 'zoom', 'xd', 'sketch', 'discord'];

const DATE_CHECKBOX_LIST = ['always', 'everyday', 'weekly', 'biweekly', 'month'] as const;
const DATE_CHECKBOX_DIC = {
  always: '상시',
  everyday: '매일',
  weekly: '매주',
  biweekly: '격주',
  month: '매월',
};
type DateCheckBoxType = typeof DATE_CHECKBOX_LIST[number];

const MEMBER_CHECKBOX_LIST = ['all', 'custom'] as const;
const MEMBER_CHECKOUT_DIC = {
  all: '모든 멤버',
  custom: '직접 선택',
};
type MemberCheckBoxType = typeof MEMBER_CHECKBOX_LIST[number];

interface ProjectRoomCreatorProps {
  roomDate: RoomDateModel;
  isCreatorVisible: boolean;
  onCreatorVisibleToggle: () => void;
  onDateChange: (state: Partial<RoomDateModel>) => void;
}

export const ProjectRoomCreator = ({
  roomDate,
  onDateChange,
  isCreatorVisible,
  onCreatorVisibleToggle,
}: ProjectRoomCreatorProps) => {
  const [textAreaCount, setTextAreaCount] = useState(0);
  const [checkedDate, setCheckedDate] = useState<DateCheckBoxType>('always');
  const [checkedMember, setCheckedMember] = useState<MemberCheckBoxType>('all');

  const currentDatePickerValue: DayValue = {
    year: roomDate.year,
    month: roomDate.month,
    day: roomDate.day,
  };

  const handleTextAreaChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setTextAreaCount(e.target.value.length);
  };

  const handleMemberChangeCurried = (value: MemberCheckBoxType) => () => {
    setCheckedMember(value);
  };

  const handleDateTimeChangeCurried = (value: DateCheckBoxType) => () => {
    setCheckedDate(value);
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
              {DATE_CHECKBOX_LIST.map((value) => (
                <CheckBox
                  key={value}
                  id={value}
                  small
                  checked={value === checkedDate}
                  label={DATE_CHECKBOX_DIC[value]}
                  onChange={handleDateTimeChangeCurried(value)}
                />
              ))}
            </CalenderCheckBoxs>
            <DateTimePickerWrap>
              <DatePicker
                disabled={checkedDate === 'always'}
                onChange={handleDatePickerChange}
                inputPlaceholder="시작일"
                value={currentDatePickerValue}
              />
              <TimePicker disabled={checkedDate === 'always'} onChange={handleTimePickerChange} />
            </DateTimePickerWrap>
          </FormField>

          <FormField>
            <FormFieldTitle level={4}>참여 멤버</FormFieldTitle>
            <MemberCheckBoxWrap>
              {MEMBER_CHECKBOX_LIST.map((member) => (
                <CheckBox
                  small
                  key={member}
                  checked={member === checkedMember}
                  label={MEMBER_CHECKOUT_DIC[member]}
                  id={member}
                  onChange={handleMemberChangeCurried(member)}
                />
              ))}
            </MemberCheckBoxWrap>

            <CheckBoxWithLogo>
              {checkedMember === 'custom' &&
                MEMBER_LIST.map((value) => (
                  <CheckBoxBlock key={value}>
                    <CheckBoxStyled
                      id={value}
                      label={
                        <LogoBox>
                          <img src={AddProfileSvg} alt="user profile image" />
                        </LogoBox>
                      }
                    />
                    <Title level={4}>{value}</Title>
                  </CheckBoxBlock>
                ))}
            </CheckBoxWithLogo>
          </FormField>

          <FormField>
            <Title level={4}>링크</Title>
            <Input placeholder="https://" />
          </FormField>

          <FormField>
            <FormFieldTitle level={4}>설명</FormFieldTitle>
            <TextAreaWrap>
              <TextArea
                onChange={handleTextAreaChange}
                placeholder="간단하게 룸 규칙이나 접속 정보 등을 기재해 주세요."
              />
              <Suffix>
                {textAreaCount}
                <span>/40</span>
              </Suffix>
            </TextAreaWrap>
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
