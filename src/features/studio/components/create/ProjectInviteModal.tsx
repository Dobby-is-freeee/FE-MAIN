import styled from 'styled-components';

import { MemberInviteModal } from './MemberInviteModal';
import { Field, Label } from './CreateForm';

import { LineButton, Select } from '@/components';

const TEAM_MEMBER_OPTIONS = [
  {
    label: '기획',
    value: '1',
  },
  {
    label: '디자인',
    value: '2',
  },
  {
    label: '개발',
    value: '3',
  },
  {
    label: '마케팅',
    value: '4',
  },
  {
    label: 'UX',
    value: '5',
  },
  {
    label: 'UI',
    value: '6',
  },
  {
    label: 'UI/UX',
    value: '7',
  },
  {
    label: '프론트엔드',
    value: '8',
  },
  {
    label: '백엔드',
    value: '9',
  },
];

const InviteButton = styled(LineButton)`
  width: 124px;
`;

interface ProjectInviteModalProps {
  isVisible: boolean;
  onToggle: (value?: boolean) => void;
}

export const ProjectInviteModal = ({
  isVisible,
  onToggle,
}: ProjectInviteModalProps) => {
  // TODO: 서버로 부터 받아올시 수정
  const invitedMember: string[] = [];

  const handleToggle = () => {
    onToggle();
  };

  return (
    <>
      <Field>
        <Label htmlFor="name">팀구성</Label>
        <Select
          placeholder="구성원의 포지션을 선택해주세요."
          isMulti
          options={TEAM_MEMBER_OPTIONS}
          isClearable
        />
      </Field>
      <Field>
        <Label htmlFor="name">멤버</Label>
        <InviteButton type="submit" onClick={handleToggle}>
          이메일로 초대
        </InviteButton>
      </Field>

      <MemberInviteModal
        isVisible={isVisible}
        invitedMember={invitedMember}
        onClose={handleToggle}
      />
    </>
  );
};
