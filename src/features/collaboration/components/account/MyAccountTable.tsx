import styled from 'styled-components';
import { ColumnsType } from 'rc-table/lib/interface';

import type { AccountTableModel } from '../../models/account.models';

import { Table } from '@/components';

const Wrap = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  padding: 12px;
  border-radius: 6px;
`;

interface MyAccountTableProps {
  columns: ColumnsType<AccountTableModel>;
  tableData: AccountTableModel[];
}

export const MyAccountTable = ({
  columns,
  tableData = [],
}: MyAccountTableProps) => {
  return (
    <Wrap>
      <Table
        emptyText="계정 정보가 없습니다."
        columns={columns}
        data={tableData}
      />
    </Wrap>
  );
};
