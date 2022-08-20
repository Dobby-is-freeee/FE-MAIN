import { useState, useEffect, useMemo } from 'react';

import { PublicAccountTable } from '../../components/account/PublicAccountTable';

import { Title, LineButton } from '@/components';

export const PublicAccountContainer = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  const isEditableTable = useMemo(() => {
    return tableData.filter((table) => table.editable === true);
  }, [tableData]);

  const handleConfirmClick = () => {
    const newTableItems = tableData.filter((table) => table.id === null);

    // TODO: server 호출
    console.log(newTableItems);
  };

  const handleAddClick = () => {
    const newTableItem = {
      id: null,
      editable: true,
    };

    setTableData((prev) => [...prev, newTableItem]);
  };

  useEffect(() => {
    // TODO: api로 변경
    setTableData(() => []);
  }, []);

  return (
    <>
      <div>
        <Title level={2}>공용 계정</Title>
        {isEditableTable.length && (
          <LineButton onClick={handleConfirmClick}>완료</LineButton>
        )}
        <LineButton variant="primary" onClick={handleAddClick}>
          계정 추가 +
        </LineButton>
      </div>
      <PublicAccountTable tableData={tableData} />
    </>
  );
};
