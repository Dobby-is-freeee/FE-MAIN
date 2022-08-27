import styled from 'styled-components';
import type { ColumnType } from 'rc-table/lib/interface';

import type { PublicAccountTableModel } from '../../models/account.models';

import { Table } from '@/components';

const Wrap = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  padding: 12px;
  border-radius: 6px;
`;

interface PublicAccountTableProps {
  columns: ColumnType<PublicAccountTableModel>[];
  tableData: PublicAccountTableModel[];
}

export const PublicAccountTable = ({
  columns,
  tableData = [],
}: PublicAccountTableProps) => {
  return (
    <Wrap>
      <Table
        columns={columns}
        data={tableData}
        emptyText="계정 정보가 없습니다."
      />
    </Wrap>
  );
};
