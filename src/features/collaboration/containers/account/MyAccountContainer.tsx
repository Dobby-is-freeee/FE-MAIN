import { useEffect, useMemo, useState } from 'react';

import { Title, LineButton } from '@/components';
import { MyAccountTable } from '../../components/account/MyAccountTable';

import TABLE_DATA from '../../_fixtures/account_list.json';

export const MyAccountContainer = () => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [selectedTableData, setSelectedTableData] = useState<number[]>([]);

  const isEditableTable = useMemo(() => tableData.filter((table) => table.editable === true), [tableData]);
  const isSelectedTable = useMemo(() => selectedTableData.length !== 0, [selectedTableData.length]);

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

  const handleSelectClicck = (any?: any) => {
    // TODO: select 시, 삭제, 수정 이벤트
    setSelectedTableData(any);
  };

  useEffect(() => {
    setTableData(() => TABLE_DATA);
  }, []);

  return (
    <>
      <div>
        <Title level={2}>내 계정</Title>
        {isSelectedTable && (
          <div>
            <LineButton>삭제하기</LineButton>
            <LineButton>수정하기</LineButton>
          </div>
        )}
        {isEditableTable.length && <LineButton onClick={handleConfirmClick}>완료</LineButton>}
        <LineButton variant="primary" onClick={handleAddClick}>
          계정 추가 +
        </LineButton>
      </div>

      <MyAccountTable tableData={tableData} />
    </>
  );
};
