import styled from 'styled-components';

import { SAMPLE_IMAGE } from '@/features/studio/constants';

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
  width: 35px;
  height: 35px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const Header = () => {
  return (
    <Wrap>
      <HeaderText>김프로님의 스튜디오</HeaderText>
      <HeaderUserInfo>
        <UserProfileImage>
          <img src={SAMPLE_IMAGE} alt="user profile image" />
        </UserProfileImage>
      </HeaderUserInfo>
    </Wrap>
  );
};
