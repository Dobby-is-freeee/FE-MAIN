import styled, { css } from 'styled-components';
import { createElement } from 'react';

type TitleLevel = 1 | 2 | 3 | 4;

interface CreateTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: TitleLevel;
  children: React.ReactNode;
}

const CreateTitle = ({ level = 1, children, ...props }: CreateTitleProps) => {
  return createElement(`h${level}`, props, children);
};

export interface TitleProps extends CreateTitleProps {}

const Heading = styled(CreateTitle)<Pick<TitleProps, 'level'>>`
  color: ${({ theme }) => theme.colors.black};

  ${({ level }) => {
    if (level === 1) {
      return css`
        font-size: 30px;
        line-height: 38px;
        font-weight: bold;
      `;
    }

    if (level === 2) {
      return css`
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
      `;
    }

    if (level === 3) {
      return css`
        font-weight: 700;
        font-size: 18px;
        line-height: 26px;
      `;
    }

    if (level === 4) {
      return css`
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      `;
    }
  }};
`;

export const Title = ({ children, ...props }: TitleProps) => {
  return <Heading {...props}>{children}</Heading>;
};
