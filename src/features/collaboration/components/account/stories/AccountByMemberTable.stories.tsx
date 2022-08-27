/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { AccountByMemberTable } from '../AccountByMemberTable';
import TABLE_DATA from '../../../_fixtures/member_account_list.json';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof AccountByMemberTable>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'collaboration/account/AccountByMemberTable',
  component: AccountByMemberTable,
  argTypes,
} as ComponentMeta<typeof AccountByMemberTable>;

const Template: ComponentStory<typeof AccountByMemberTable> = ({
  ...props
}) => {
  return <AccountByMemberTable {...props}></AccountByMemberTable>;
};

export const Default = Template.bind({});
Default.args = {
  tableData: TABLE_DATA,
};
