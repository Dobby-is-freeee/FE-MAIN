import styled from 'styled-components';

import { Input, SolidButton, CheckBox } from '@/components';
import { InputPassword } from '@/components/InputPassword';

const Wrapper = styled.div`
  margin-bottom: 12px;

  input {
    margin-bottom: 12px;
  }
`;

const CheckBoxStyled = styled(CheckBox)`
  margin-top: 16px;
`;

const SolidButtonStyled = styled(SolidButton)`
  margin-top: 20px;
`;

export interface SignupFormProps {
  onSubmit: () => void;
}

function SignupForm({ onSubmit }: SignupFormProps) {
  return (
    <Wrapper>
      <Input placeholder="이름" />
      <Input placeholder="이메일" />
      <InputPassword placeholder="비밀번호" />
      <CheckBoxStyled
        label="사이드킥 이용 약관 및 개인정보 취급방침에 대한 내용을 모두 확인하였으며, 이에 동의합니다."
        id="login"
      />
      <SolidButtonStyled onClick={onSubmit}>가입하기</SolidButtonStyled>
    </Wrapper>
  );
}

export default SignupForm;
