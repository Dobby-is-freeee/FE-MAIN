/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';
import { PublicAccountTable } from '../PublicAccountTable';

import TABLE_DATA from '../../../_fixtures/public_account_list.json';

type MyArgTypes = Partial<Record<keyof ComponentProps<typeof PublicAccountTable>, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'collaboration/account/PublicAccountTable',
  component: PublicAccountTable,
  argTypes,
} as ComponentMeta<typeof PublicAccountTable>;

const Template: ComponentStory<typeof PublicAccountTable> = ({ ...props }) => {
  return <PublicAccountTable {...props}></PublicAccountTable>;
};

export const Default = Template.bind({});
Default.args = {
  tableData: TABLE_DATA,
};
