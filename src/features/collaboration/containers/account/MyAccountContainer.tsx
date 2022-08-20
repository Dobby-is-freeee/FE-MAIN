import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';

import { AccountTableModel } from '../../models/account.models';
import { useMyAccountTableColumns } from '../../hooks/useMyAccountTableCoumns';
import { MyAccountTable } from '../../components/account/MyAccountTable';
import { EditableTableHeader } from '../../components/account/EditableTableHeader';
import TABLE_DATA from '../../_fixtures/account_list.json';

const Wrap = styled.div`
  padding-bottom: 60px;
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
      <EditableTableHeader
        title="내 계정"
        isEditableTable={!!isEditableTable.length}
        isSelectedTable={isSelectedTable}
        onAddClick={handleAddClick}
        onConfirmClick={handleConfirmClick}
        onDeleteClick={handleDeleteClick}
        onEditableClick={handleEditableClick}
      />

      <MyAccountTable columns={columns} tableData={tableData} />
    </Wrap>
  );
};
