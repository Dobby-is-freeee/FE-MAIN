/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { Table } from '../Table';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof Table>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'components/Table',
  components: Table,
  argTypes,
} as ComponentMeta<typeof Table>;

const data = [
  {
    id: 1,
    tools: 'notion',
    account: 'cskim132@gmail.com',
  },
  {
    id: 2,
    tools: 'slack',
    account: 'cskim132@gmail.com',
  },
  {
    id: 3,
    tools: 'notion',
    account: 'cskim132@gmail.com',
  },
];

const Template: ComponentStory<typeof Table> = ({ ...props }) => {
  const columns = [
    {
      title: '아이디',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '협업툴',
      dataIndex: 'tools',
      key: 'tools',
    },
    {
      title: '계정',
      dataIndex: 'account',
      key: 'account',
    },
  ];

  return <Table {...props} columns={columns}></Table>;
};

export const Default = Template.bind({});
Default.args = {
  data,
};

export const Empty = Template.bind({});
Empty.args = {
  data: [],
  emptyText: '계정 정보가 없습니다.',
};
