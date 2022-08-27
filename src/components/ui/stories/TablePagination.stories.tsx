/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { TablePagination } from '../TablePagination';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof TablePagination>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'components/TablePagination',
  component: TablePagination,
  argTypes,
} as ComponentMeta<typeof TablePagination>;

const Template: ComponentStory<typeof TablePagination> = ({ ...props }) => {
  return <TablePagination {...props}></TablePagination>;
};

export const Default = Template.bind({});
Default.args = {
  current: 1,
  total: 101,
  paginationPer: 20,
  pageSize: 10,
};

export const Empty = Template.bind({});
Empty.args = {
  current: 1,
  total: 0,
  paginationPer: 20,
  pageSize: 10,
};

export const One = Template.bind({});
One.args = {
  current: 1,
  total: 10,
  paginationPer: 20,
  pageSize: 10,
};
