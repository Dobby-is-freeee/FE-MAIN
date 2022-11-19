import styled from 'styled-components';
import { LineButton, Modal, Select, SolidButton, Title } from '@ui';
import { AddProfile, LinkIcon } from '@assets/images';

const ModalInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 441px;
`;

const SelectWrap = styled.div`
  display: flex;
  margin-top: 8px;
`;

const SelectButton = styled(SolidButton)`
  margin-left: 8px;
  font-size: 14px;
`;

const MemberWrap = styled.div`
  overflow: auto;
  flex: 1;
`;

const MemberList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 33px;
  margin-bottom: 8px;
`;

const MemberListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;

  svg {
    color: ${({ theme }) => theme.colors.gray2};
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;

const MemberEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray2};
  font-size: 14px;
  height: 160px;
  margin-bottom: 8px;
`;

const MessageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`;

const MessageExtraText = styled.small`
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.gray3};
`;

const TextAreaWrap = styled.div`
  margin-top: 12px;
`;

const MessageTextArea = styled.textarea`
  outline: none;
  resize: none;
  border: none;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.darkWhite};
  padding: 20px;
  border-radius: 6px;
  width: 100%;
  height: 100px;

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray3};
  }
`;

const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkButton = styled(LineButton)`
  background-color: transparent;
  border-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 40px;
`;

const FooterButton = styled(LineButton)`
  background-color: transparent;
  border-color: transparent;
  width: 73px;
  height: 40px;
`;

interface MemberInviteModalProps {
  isVisible: boolean;
  invitedMember: string[];
  onClose: () => void;
}

export const MemberInviteModal = ({
  invitedMember,
  isVisible,
  onClose,
}: MemberInviteModalProps) => {
  return (
    <Modal
      visible={isVisible}
      title="멤버초대"
      width={600}
      height={'auto'}
      onClose={onClose}
      content={
        <ModalInnerWrap>
          <Title level={4}>멤버를 초대해주세요.</Title>
          <SelectWrap>
            <Select
              width="445px"
              isMulti
              inputMode
              placeholder="예) example@sideproject.com"
            />
            <SelectButton>초대하기</SelectButton>
          </SelectWrap>

          {invitedMember?.length ? (
            <MemberWrap>
              <MemberList>
                {invitedMember.map((email) => (
                  <MemberListItem key={email}>
                    <AddProfile />
                    {email}
                  </MemberListItem>
                ))}
              </MemberList>
            </MemberWrap>
          ) : (
            <MemberEmpty>
              초대된 멤버가 없습니다. 멤버를 초대해주세요!
            </MemberEmpty>
          )}

          <MessageWrap>
            <Title level={4}>초대내용 입력</Title>
            <MessageExtraText>
              초대내용은 직접 수정할 수 있습니다.
            </MessageExtraText>

            <TextAreaWrap>
              <MessageTextArea placeholder="사이드프로젝트를 돕는 프로덕트를 만들어나가요." />
            </TextAreaWrap>
          </MessageWrap>
        </ModalInnerWrap>
      }
      footer={
        <FooterWrap>
          {/* TODO: 링크 복사 기능 추가 */}
          <LinkButton>
            <LinkIcon />
            링크 복사하기
          </LinkButton>
          {/* TODO: 확인 시 제출 기능 추가 */}
          <FooterButton onClick={onClose}>확인</FooterButton>
        </FooterWrap>
      }
    />
  );
};
