import styled from 'styled-components';

import { SolidButton, Title } from '@/components';
import { MailConfirm } from '@/assets/images';

const Wrap = styled.article`
  display: flex;
  flex-direction: column;
  width: 448px;
  height: 450px;
  padding: 48px 40px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 6px;
`;

const TitleStyled = styled(Title)`
  width: 100%;
  text-align: center;
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  flex: 1;
  font-weight: 500;
  font-size: 16px;

  p {
    margin-top: 12px;
  }
`;

export interface CompleteContainerProps {}

function CompleteContainer() {
  return (
    <Wrap>
      <TitleStyled level={1}>가입을 환영합니다!</TitleStyled>
      <TextWrap>
        <MailConfirm />
        <p>
          회원가입이 완료되었습니다. <br />
          서비스 이용이 가능합니다.
        </p>
      </TextWrap>
      <SolidButton>스튜디오 이동</SolidButton>
    </Wrap>
  );
}

export default CompleteContainer;
