import Table from 'rc-table';

import type { ColumnType } from 'rc-table/lib/interface';
import type { AccountTableModel } from '../../models/account.models';

import { CheckBox } from '@/components';

const columns: ColumnType<AccountTableModel>[] = [
  {
    title: <CheckBox id="all" />,
    dataIndex: 'id',
    key: 'id',
    render: (id: number) => <CheckBox id={id.toString()} />,
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
interface MyAccountTableProps {
  tableData: AccountTableModel[];
}

export const MyAccountTable = ({ tableData = [] }: MyAccountTableProps) => {
  return <Table columns={columns} data={tableData} />;
};
