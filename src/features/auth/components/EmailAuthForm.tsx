import styled from 'styled-components';
import { SolidButton } from '@ui';
import { Mail } from '@assets/images';

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

interface EmailAuthFormProps {
  onRetryEmailClick: () => void;
}

export const EmailAuthForm = ({ onRetryEmailClick }: EmailAuthFormProps) => {
  return (
    <>
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
        <SolidButton onClick={onRetryEmailClick}>
          이메일 다시 보내기
        </SolidButton>
      </ResendWrapper>
    </>
  );
};
