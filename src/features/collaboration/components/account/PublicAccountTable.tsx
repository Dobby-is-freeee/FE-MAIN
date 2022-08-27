import type { ColumnType } from 'rc-table/lib/interface';
import Table from 'rc-table';

import type { PublicAccountTableModel } from '../../models/account.models';

import { CheckBox } from '@/components';

const columns: ColumnType<PublicAccountTableModel>[] = [
  {
    title: <CheckBox id="all" />,
    dataIndex: 'id',
    key: 'id',
    render: (id: number) => <CheckBox id={id.toString()} />,
  },
  {
    title: '구분',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '협업툴/사이트',
    dataIndex: 'tools',
    key: 'tools',
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

interface PublicAccountTableProps {
  tableData: PublicAccountTableModel[];
}

export const PublicAccountTable = ({
  tableData = [],
}: PublicAccountTableProps) => {
  return <Table columns={columns} data={tableData} />;
};
