import Table from 'rc-table';

import type { ColumnType } from 'rc-table/lib/interface';
import type { AccountByMemberTableModel } from '../../models/account.models';

const columns: ColumnType<AccountByMemberTableModel>[] = [
  {
    title: '멤버',
    dataIndex: 'member',
    key: 'member',
    render: ({ image, name }) => {
      return (
        <div>
          <img src={image} alt="member profile image" />
          <span>{name}</span>
        </div>
      );
    },
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

interface AccountByMemberTableProps {
  tableData: AccountByMemberTableModel[];
  onPageChange: () => void;
}

export const AccountByMemberTable = ({ tableData = [], onPageChange }: AccountByMemberTableProps) => {
  return <Table columns={columns} data={tableData} />;
};
