import React from 'react';
import styled from 'styled-components';

import Button from '@/features/auth/components/Button';

export interface CompleteContainerPropTypes {}

function CompleteContainer() {
  return (
    <Article>
      <Title>가입을 환영합니다.</Title>
      <Text>{`프로필을 입력하고,\n 멤버들과 함께 사이드프로젝트를 시작하세요.`}</Text>
      <Button status="confirm">프로필 입력하기</Button>
    </Article>
  );
}

export default CompleteContainer;

const Article = styled.article`
  width: 30rem;
  font-size: 1.25rem;

  & > button {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
`;

const Title = styled.h3`
  margin-bottom: 11rem;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
`;

const Text = styled.div`
  white-space: pre-wrap;
  text-align: center;
  margin-bottom: 3rem;
`;
