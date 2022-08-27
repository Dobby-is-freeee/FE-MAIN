import styled from 'styled-components';
import type { ColumnType } from 'rc-table/lib/interface';

import type { AccountByMemberTableModel } from '../../models/account.models';

import { Table, TablePagination } from '@/components';

const Wrap = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  padding: 12px;
  border-radius: 6px;
`;

const TablePaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray2};
  padding: 24px 0;
`;

interface AccountByMemberTableProps {
  columns: ColumnType<AccountByMemberTableModel>[];
  tableData: AccountByMemberTableModel[];
  onPageChange: (page: number) => void;
}

export const AccountByMemberTable = ({
  columns,
  tableData = [],
  onPageChange,
}: AccountByMemberTableProps) => {
  return (
    <Wrap>
      <Table columns={columns} data={tableData} />
      <TablePaginationStyled>
        <TablePagination total={tableData.length} onPageChange={onPageChange} />
      </TablePaginationStyled>
    </Wrap>
  );
};
