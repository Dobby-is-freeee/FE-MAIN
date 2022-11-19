/* eslint-disable no-alert */
import styled from 'styled-components';
import { ComponentProps } from 'react';
import { CheckBox } from '@ui';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { IMAGE_DIC } from '@features/collaboration/constants';

import { MyAccountTable } from '../MyAccountTable';
import TABLE_DATA from '../../../_fixtures/account_list.json';

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
  Record<keyof ComponentProps<typeof MyAccountTable>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'collaboration/account/MyAccountTable',
  component: MyAccountTable,
  argTypes,
} as ComponentMeta<typeof MyAccountTable>;

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
];

const Template: ComponentStory<typeof MyAccountTable> = ({ ...props }) => {
  return <MyAccountTable {...props} columns={columns}></MyAccountTable>;
};

export const Default = Template.bind({});
Default.args = {
  tableData: TABLE_DATA,
};

export const Empty = Template.bind({});
Empty.args = {
  tableData: [],
};
