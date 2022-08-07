import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Mail } from '@/assets/images';
import { SolidButton, Title } from '@/components';
import { Logo } from './SigninContainer';

const Wrap = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};

  width: 448px;
  height: 601px;
  padding: 48px 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 6px;
`;

const TitleStyled = styled(Title)`
  margin-bottom: 20px;
`;

const TextWrap = styled.div`
  text-align: center;
  margin-bottom: 40px;
  flex: 1;
`;

const EmailText = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-top: 12px;
  margin-bottom: 4px;
`;

const EmailSubText = styled.p`
  line-height: 24px;
  font-size: 16px;
  margin-bottom: 12px;
`;

const EmailExtraText = styled.small`
  color: ${({ theme }) => theme.colors.gray3};
  font-size: 14px;
`;

const ResendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  p {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.gray3};
    font-size: 16px;
  }
`;

export interface EmailAuthContainerProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function EmailAuthContainer(_: EmailAuthContainerProps) {
  const navigate = useNavigate();

  const handleClickButton = useCallback(() => {
    navigate('/auth/complete');
  }, [navigate]);

  return (
    <Wrap>
      <Logo />
      <TitleStyled level={1}>이메일 인증</TitleStyled>

      <TextWrap>
        <Mail />
        <EmailText>user123@gmail.com</EmailText>
        <EmailSubText>
          (으)로 인증 메일을 보냈습니다.
          <br />
          <strong>이메일 인증을 마치면</strong> 가입이 완료됩니다.
        </EmailSubText>
        <EmailExtraText>인증메일 유효기간: ~ 2022.05.10 15:33</EmailExtraText>
      </TextWrap>

      <ResendWrapper>
        <p>이메일을 받지 못하셨나요?</p>
        <SolidButton onClick={handleClickButton}>이메일 다시 보내기</SolidButton>
      </ResendWrapper>
    </Wrap>
  );
}

export default EmailAuthContainer;
