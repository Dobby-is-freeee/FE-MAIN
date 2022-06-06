import React, { useCallback } from 'react';
import styled from 'styled-components';

import Button from '@/features/auth/components/Button';

export interface EmailAuthContainerPropTypes {
  successAuth: () => void;
}

function EmailAuthContainer({ successAuth }: EmailAuthContainerPropTypes) {
  const handleClickButton = useCallback(() => {
    successAuth();
  }, [successAuth]);

  return (
    <Article>
      <Title>이메일 인증</Title>
      <Order>
        <li>
          <InfoWrapper>
            <span>user123@gmail.com</span>(으)로 인증 메일을 보냈습니다.
            <br /> 이메일 인증을 마치면 가입이 완료됩니다.
          </InfoWrapper>
        </li>
        <li>인증메일 유효기간: ~ 2022.05.10 15:33</li>
        <li>
          <ResendWrapper>
            이메일을 받지 못하셨나요?
            <Button status="confirm" onClick={handleClickButton}>
              이메일 다시 보내기
            </Button>
          </ResendWrapper>
        </li>
      </Order>
    </Article>
  );
}

export default EmailAuthContainer;

const Article = styled.article`
  width: 30rem;
  font-size: 1.25rem;
`;

const Title = styled.h3`
  margin-bottom: 4rem;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
`;

const Order = styled.ol`
  counter-reset: order;

  & > li {
    position: relative;
    display: flex;
    align-items: center;
    counter-increment: order;
    margin-bottom: 2rem;

    & span {
      font-weight: bolder;
    }

    &:before {
      position: absolute;
      left: -55px;

      display: block;
      line-height: 2.5rem;
      flex-shrink: 0;

      text-align: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 100%;
      background: #ff00e5;
      content: '0' counter(order);
      color: white;
    }
  }
`;

const InfoWrapper = styled.div`
  font-weight: bold;

  & > span {
    font-weight: bolder;
  }
`;

const ResendWrapper = styled.div`
  display: flex;
  align-items: center;

  & > button {
    margin-left: 1.2rem;
    width: 14rem;
    height: 3.75rem;
  }
`;
