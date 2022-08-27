/* eslint-disable no-alert */
import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { MyAccountTable } from '../MyAccountTable';
import TABLE_DATA from '../../../_fixtures/account_list.json';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof MyAccountTable>, ArgTypes[string]>
>;
const argTypes: MyArgTypes = {};

export default {
  title: 'collaboration/account/MyAccountTable',
  component: MyAccountTable,
  argTypes,
} as ComponentMeta<typeof MyAccountTable>;

const Template: ComponentStory<typeof MyAccountTable> = ({ ...props }) => {
  return <MyAccountTable {...props}></MyAccountTable>;
};

export const Default = Template.bind({});
Default.args = {
  tableData: TABLE_DATA,
};
