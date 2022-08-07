import styled from 'styled-components';

import { MyProfilePurple, Notice } from '@/assets/images';

const Wrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 104px;
  padding: 0 32px;
`;

const HeaderText = styled.div`
  /* TODO: 폰트 추가 */
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.0025em;
  color: ${({ theme }) => theme.colors.black};
`;

const HeaderUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const UserProfileImage = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-left: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray1};
  }
`;

export const Header = () => {
  return (
    <Wrap>
      <HeaderText>김프로님의 스튜디오</HeaderText>
      <HeaderUserInfo>
        <UserProfileImage>
          <Notice />
          {/* TODO: icon-search로 변경 */}
          <Notice />
          <img src={MyProfilePurple} alt="user profile image" />
        </UserProfileImage>
      </HeaderUserInfo>
    </Wrap>
  );
};
