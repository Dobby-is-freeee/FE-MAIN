/* eslint-disable no-alert */
import styled from 'styled-components';
import { ComponentProps } from 'react';
import { ArgTypes, ComponentMeta, ComponentStory } from '@storybook/react';

import { PublicAccountTable } from '../PublicAccountTable';
import TABLE_DATA from '../../../_fixtures/public_account_list.json';

import { IMAGE_DIC } from '@/features/collaboration/constants';
import { CheckBox, Tag } from '@/components';

const Wrap = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 4px;
`;

const CheckBoxHeadStyled = styled(CheckBox)`
  & + label {
    height: 18px;
  }
`;

const CheckBoxStyled = styled(CheckBox)`
  & + label {
    height: 28px;
  }
`;

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof PublicAccountTable>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'collaboration/account/PublicAccountTable',
  component: PublicAccountTable,
  argTypes,
} as ComponentMeta<typeof PublicAccountTable>;

const columns = [
  {
    title: <CheckBoxHeadStyled id="all" />,
    dataIndex: 'id',
    key: 'id',
    render: (id: number) => {
      return <CheckBoxStyled id={id} />;
    },
    width: 100,
  },
  {
    title: '구분',
    dataIndex: 'category',
    key: 'category',
    render: (category: string) => <Tag>{category}</Tag>,
  },
  {
    title: '협업툴',
    dataIndex: 'tools',
    key: 'tools',
    render: (tools: string) => (
      <Wrap>
        <img src={IMAGE_DIC[tools]} />
        <span>{tools[0].toUpperCase() + tools.substring(1)}</span>
      </Wrap>
    ),
    width: 400,
  },
  {
    title: '계정',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: '비밀번호',
    dataIndex: 'password',
    key: 'password',
  },
];

const Template: ComponentStory<typeof PublicAccountTable> = ({ ...props }) => {
  return <PublicAccountTable {...props} columns={columns}></PublicAccountTable>;
};

export const Default = Template.bind({});
Default.args = {
  tableData: TABLE_DATA,
};

export const Empty = Template.bind({});
Empty.args = {
  tableData: [],
};
