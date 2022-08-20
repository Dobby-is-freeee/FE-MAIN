import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { LineButton, Title } from '@/components';
import { MyAccountTable } from '../../components/account/MyAccountTable';
import { useMyAccountTableColumns } from '../../hooks/useMyAccountTableCoumns';
import { AccountTableModel } from '../../models/account.models';
import TABLE_DATA from '../../_fixtures/account_list.json';

const Wrap = styled.div`
  padding-bottom: 60px;
`;

const TableOutTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const TableOutButtonWrap = styled.div`
  display: flex;
  gap: 8px;
  font-size: 14px;

  button {
    &:nth-last-of-type(1) {
      width: 100px;
    }
    width: fit-content;
    padding: 9px 16px;
  }
`;

export const MyAccountContainer = () => {
  const [tableData, setTableData] = useState<AccountTableModel[]>([]);
  const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);

  const isEditableTable = useMemo(
    () => tableData.filter((table) => table.editable === true),
    [tableData],
  );
  const isSelectedTable = useMemo(
    () => selectedRowIds.length !== 0,
    [selectedRowIds.length],
  );
  const isAllSelected = useMemo(
    () => tableData.length > 0 && tableData.length === selectedRowIds.length,
    [selectedRowIds.length, tableData.length],
  );

  const handleDeleteClick = () => {
    setTableData((prev) =>
      prev.filter((item) => !selectedRowIds.includes(item.id)),
    );

    setSelectedRowIds([]);
  };

  const handleEditableClick = () => {
    setTableData((prev) =>
      prev.map((item) =>
        selectedRowIds.includes(item.id) ? { ...item, editable: true } : item,
      ),
    );

    setSelectedRowIds([]);
  };

  const handleConfirmClick = () => {
    const newTableItems = tableData.filter((table) => table.editable === true);

    // TODO: server 호출
    console.log(newTableItems);
  };

  const handleAddClick = () => {
    const newTableItem: AccountTableModel = {
      id: Date.now(),
      account: '',
      tools: 'notion',
      editable: true,
    };

    setTableData((prev) => [newTableItem, ...prev]);
  };

  const handleSelectRows = () => {
    setSelectedRowIds((prev) => {
      if (prev.length === tableData.length) {
        return [];
      }
      return tableData.map((row) => row.id);
    });
  };

  const handleSelectRow = (rowId: number) => {
    setSelectedRowIds((prev) => {
      if (prev.includes(rowId)) {
        return prev.filter((item) => item !== rowId);
      }

      return [...prev, rowId];
    });
  };

  const handleRowChange = (row: Partial<AccountTableModel>) => {
    if (!row.id) {
      return;
    }

    setTableData((prev) => {
      return prev.map((item) =>
        item.id === row.id
          ? {
              id: row.id,
              account: row.account || item.account,
              tools: row.tools || item.tools,
              editable: row.editable,
            }
          : item,
      );
    });
  };

  useEffect(() => {
    setTableData(() => TABLE_DATA);
  }, []);

  const columns = useMyAccountTableColumns({
    isAllSelected,
    selectedRowIds,
    onRowChange: handleRowChange,
    onSelectRow: handleSelectRow,
    onSelectRows: handleSelectRows,
  });

  return (
    <Wrap>
      <TableOutTitleWrap>
        <Title level={2}>내 계정</Title>
        <TableOutButtonWrap>
          {isSelectedTable ? (
            <>
              <LineButton onClick={handleDeleteClick}>삭제하기</LineButton>
              <LineButton onClick={handleEditableClick}>수정하기</LineButton>
            </>
          ) : null}
          {isEditableTable.length ? (
            <LineButton onClick={handleConfirmClick}>완료</LineButton>
          ) : null}
          <LineButton variant="primary" onClick={handleAddClick}>
            계정 추가 +
          </LineButton>
        </TableOutButtonWrap>
      </TableOutTitleWrap>

      <MyAccountTable columns={columns} tableData={tableData} />
    </Wrap>
  );
};
